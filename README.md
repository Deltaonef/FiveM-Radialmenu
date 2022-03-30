# FiveM-Radialmenu
🎈 A custom command based Radialmenu system for fivem! Edit of:  H0P Vehiclecontrol

🎃 Features:

   From the original script:
  
   • Hood/Trunk Commands

   • Door/Window Commands

   • Engine on/off Command

   • Seat change Command

   • NEW Icons for all menu functions

   Added by me:
   
   • Can be used on foot or in car!

   • Added multiple custom classes with pre-made features like clothing, dpEmotes things...!

   • Notations to make custom functions.

   • UI style changes!

   • /radialfix command incase the menu freezes! (Unfortunately it happens often, if you know how to fix it contact me.)

🆘 Do you need any help? Contact me on discord! @Alphaonef#3658

💬 FiveM Finland Discord: https://discord.gg/xZFG69p3Cx

✨ Original release: https://forum.cfx.re/t/free-release-vehicle-control-radial-menu-commands/4813817

📸 Preview:

 ![CustomRadialMenu](https://user-images.githubusercontent.com/71275992/160847156-1035fbb7-d854-4a65-bc74-8d5f0273c200.PNG)

🎭 Depency's: https://github.com/JayMontana36/mythic_notify

📃 Docs how to make a command for a function:

💻 Just add that to a client.lua

```
RegisterCommand("commandname", function() --The name of the command
    print("Works") --Print to verify if the command works.
    TriggerEvent('script_name:functionName') --The event that will be triggered 
end)
