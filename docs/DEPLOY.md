# Deploy Virtec to Your Own EC2

This guide is for anyone who has **forked or cloned** this repo and wants to deploy it to **their own AWS EC2** using GitHub Actions. After setup, every push to `main` (and every **Sync fork**) will deploy to your EC2 and show the service URL in the Actions summary for DNS.

---

## What You Need

- An **AWS EC2** instance (Ubuntu 20.04+ or Amazon Linux 2).
- Your **fork** of this repo on GitHub.
- About 15 minutes for one-time setup.

---

## Required GitHub Secrets

The workflow uses **4 repository secrets**. You must create them in **your** fork (not the original repo).

| Secret name     | Description |
|-----------------|-------------|
| `EC2_HOST`      | EC2 public IP (e.g. `13.233.45.67`) |
| `EC2_USER`      | Linux user for SSH (e.g. `deploy` or `ubuntu`) |
| `EC2_SSH_KEY`   | **Private** SSH key contents (full file, including `-----BEGIN ...` and `-----END ...`) |
| `APP_DIR`       | Path to the app on EC2 (e.g. `/home/deploy/virtec`) |

**Note:** In your IDE you may see “Context access might be invalid” for these secrets until you add them in GitHub. That’s expected; the workflow runs correctly once the secrets exist in the repo.

---

## Step 1: Create the SSH Key (on your machine)

Run **once** on your Mac or Linux machine:

```bash
ssh-keygen -t ed25519 -f virtec-ci -C "github-actions-virtec"
```

When asked for a passphrase, press **Enter** (leave empty).

You get two files:

- **`virtec-ci`** → **private key** (used as `EC2_SSH_KEY` in GitHub; keep this file private).
- **`virtec-ci.pub`** → **public key** (goes on EC2 in Step 3).

---

## Step 2: Prepare EC2

### 2.1 SSH into EC2

Use your normal SSH key and user (e.g. `ubuntu` or `ec2-user`):

```bash
ssh ubuntu@<YOUR_EC2_PUBLIC_IP>
```

(On Amazon Linux use `ec2-user` instead of `ubuntu`.)

### 2.2 Install Docker

**Ubuntu:**

```bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker
```

**Amazon Linux 2:**

```bash
sudo yum update -y
sudo yum install -y docker
sudo systemctl enable docker
sudo systemctl start docker
```

### 2.3 Create a deploy user (recommended)

```bash
sudo adduser deploy
sudo usermod -aG docker deploy
sudo su - deploy
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
```

Paste the **entire contents** of your **`virtec-ci.pub`** file, save and exit (`Ctrl+O`, Enter, `Ctrl+X`), then:

```bash
chmod 600 ~/.ssh/authorized_keys
exit
```

If you prefer to use your existing user (e.g. `ubuntu`) instead of `deploy`, skip creating `deploy` and add the public key to that user’s `~/.ssh/authorized_keys` and use that username for `EC2_USER` and `APP_DIR` below.

### 2.4 Clone the repo on EC2

**As the user you will use for deploys** (e.g. `deploy`):

```bash
sudo su - deploy
git clone https://github.com/YOUR_USERNAME/virtec.git
cd virtec
exit
```

Replace `YOUR_USERNAME` with your GitHub username (or org). If the repo is **private**, add **`virtec-ci.pub`** as a **Deploy key** in the repo (Settings → Deploy keys → Add deploy key), or use an HTTPS URL with a token:  
`https://<TOKEN>@github.com/YOUR_USERNAME/virtec.git`.

### 2.5 Open firewall (AWS Security Group)

In **AWS Console → EC2 → Security groups → your instance’s security group → Edit inbound rules**, add:

- **Port 22** (SSH) – so GitHub Actions can connect.
- **Port 3000** (TCP) – so you can open the app in a browser.

---

## Step 3: Add the 4 Secrets in GitHub

1. Open **your fork** of the repo on GitHub.
2. Go to **Settings → Secrets and variables → Actions**.
3. Click **New repository secret** and add each of these:

### `EC2_HOST`

- **Name:** `EC2_HOST`
- **Value:** Your EC2 public IP (e.g. `13.233.45.67`).

### `EC2_USER`

- **Name:** `EC2_USER`
- **Value:** The user you SSH as (e.g. `deploy` or `ubuntu`).

### `EC2_SSH_KEY`

- **Name:** `EC2_SSH_KEY`
- **Value:** The **full contents** of the **private** key file `virtec-ci`.

On your machine run:

```bash
cat virtec-ci
```

Copy **everything**, including the lines:

```
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

Paste that as the secret value. No extra spaces or missing lines.

### `APP_DIR`

- **Name:** `APP_DIR`
- **Value:** The path where you cloned the repo on EC2 (e.g. `/home/deploy/virtec`).

---

## Step 4: Test SSH (optional)

From your machine:

```bash
ssh -i virtec-ci deploy@<YOUR_EC2_PUBLIC_IP>
```

(Use `ubuntu` or `ec2-user` if that’s your `EC2_USER`.)

If you get a shell, the key and EC2 setup are correct. Type `exit` to leave.

---

## Step 5: Trigger a Deploy

- **Push** to the `main` branch of your fork, or  
- Use **Sync fork** to pull the latest from the upstream repo.

Then:

1. Go to **Actions** in your fork.
2. Open the latest **“Deploy Virtec to EC2”** run.
3. When it finishes, the **summary** at the top will show:
   - **App URL** (e.g. `http://<IP>:3000`)
   - **A record (IPv4)** – the IP to use in DNS.

Open the App URL in a browser to confirm the site is running.

---

## Using the Service URL in DNS

After each successful deploy, the workflow writes the service URL and IP to the run **summary**:

- **App URL:** `http://<EC2_IP>:3000` – use this to test the site.
- **A record (IPv4):** `<EC2_IP>` – use this in your DNS provider.

In your DNS (e.g. your domain’s A record), point your hostname to that IP. The app listens on **port 3000**. For **port 80/443**, put a reverse proxy (e.g. Nginx) on EC2 and point the domain there.

---

## Summary Checklist

| Step | Where   | Action |
|------|--------|--------|
| 1    | Your PC | Run `ssh-keygen`, get `virtec-ci` and `virtec-ci.pub` |
| 2    | EC2    | Install Docker, create `deploy` user, add `virtec-ci.pub` to `~/.ssh/authorized_keys`, clone repo |
| 3    | GitHub | Add secrets: `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY`, `APP_DIR` |
| 4    | AWS    | Security group: allow ports 22 and 3000 |
| 5    | Your PC | (Optional) Test: `ssh -i virtec-ci deploy@<EC2_IP>` |
| 6    | GitHub | Push to `main` or Sync fork → deploy runs → use summary for DNS |

After this, every push to `main` and every **Sync fork** will deploy to your EC2 and show the service URL in the Actions summary so you can add it to your DNS.
