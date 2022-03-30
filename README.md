# FiveM-Radialmenu
🎈 A custom command based Radialmenu system for fivem! Edit of:  H0P Vehiclecontrol

🆘 Do you need any help? Contact me on discord! @Alphaonef#3658
💬 FiveM Finland Discord: https://discord.gg/xZFG69p3Cx

✨ Original release: https://forum.cfx.re/t/free-release-vehicle-control-radial-menu-commands/4813817

📃 Docs how to make a command for a function:

💻 Just add that to a client.lua

```
RegisterCommand("commandname", function() --The name of the command
    print("Works") --Print to verify if the command works.
    TriggerEvent('script_name:functionName') --The event that will be triggered 
end)
