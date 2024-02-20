# How to configure

To configure your bot, reach the `config.example.json` and then fill it with your informations.

## Step 1 : Reach `config.example.json` : 

`config.example.json`

```json
{
  "Token": "PUT YOUR TOKEN",
  "Prefix": "PUT YOUR PREFIX",
  "Owner": "PUT YOUR ID",
  "LogChannel": "PUT YOUR CHANNEL ID",
  "GuildID": "PUT YOUR GUILD ID"
}
```

---

## Step 2 : Rename the file

Then now, change the name of the file by using `F2` key or `Right Click -> Rename` and change it to this : 

```diff
- config.example.json
+ config.json
```


## Step 3 : Start the bot

If you clone the repository correctly, open a CMD Prompt, and type inside :  
```
cd easy-djs
```

Then type inside the CMD Prompt : 

```
node src/main.js
```

---

## Step 4 : Alternative Launch options 

> [!WARNING] 
> Those alternative can be used on a VPS and on your own computer


### Launch Alternative 1 : PM2

You can find any information on the official [PM2 Website](https://pm2.keymetrics.io/) 

1. Download PM2 : 

Open a CMD Prompt, and type this : 
```
npm install pm2 -g
```

2. Start the bot 
In the same CMD Prompt, reach where the repo. Then, type this 
```
pm2 start src/main.js --name "My Magic Bot From easy-djs"
```

Everything should start correctly. You can check the good work of everything by typing : 
```
pm2 logs 0 (Or the pm2 ID from the Table)
```



---

---
---
# If you have error : 

Reach me at : `ivy.js` on discord.
Thanks.