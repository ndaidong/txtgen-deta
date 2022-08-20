# txtgen-deta

Demonstrate how to deploy [txtgen](https://github.com/ndaidong/txtgen) service to Deta cloud

[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/ndaidong/txtgen-deta)

## Guide


### 1, Install `deta` cli

```bash
# Linux, Mac
curl -fsSL https://get.deta.dev/cli.sh | sh

# Windows PowerShell
iwr https://get.deta.dev/cli.ps1 -useb | iex
```

### 2, Authentication

```bash
deta login
```

It will open your default browser similar to [Cloudflare's workers](https://workers.cloudflare.com/).
Recommend to use standard version of Firefox or Chrome because some browsers may not work.

### 3, Clone this project

You can rename, modify meta data, remove `.git` folder if needed:

```bash
git clone https://github.com/ndaidong/txtgen-deta.git
cd txtgen-deta
rm -rf .git
```

### 4, Create new Deta Micro

```bash
# cd txtgen-deta

# you can specify project
deta new --node --project your_project_name

# or use default project
deta new --node
```

### 5, Install dependencies

```bash
# cd txtgen-deta
npm i
```

### 6, Deploy to Deta cloud

```bash
deta deploy
```

Check generated url to see how it works.


## References

- [Deta Micros](https://docs.deta.sh/docs/micros/about)
- [feed-reader](https://github.com/ndaidong/txtgen)
- [express](https://github.com/expressjs/express)

---
