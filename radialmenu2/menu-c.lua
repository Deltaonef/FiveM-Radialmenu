RegisterCommand('+openRadial', function()
    SendNUIMessage({
        type = 'open'
    })    
    SetCursorLocation(0.5, 0.5) -- Set cursor to centre
    SetNuiFocus(true, true)         
end)

RegisterKeyMapping('+openRadial', 'Open the radial menu', 'keyboard', 'F1')

RegisterNUICallback('close', function(data, cb) -- Return focus on close
    SetNuiFocus(false, false)
end)

RegisterNUICallback('command', function(data, cb) -- Execute command from block clicked
    local itemId = data.itemId
    ExecuteCommand(itemId)
end)

--[[RegisterNUICallback('command', function(data)
    local itemData = data.itemData

    if itemData.type == 'client' then
        TriggerEvent(itemData.event, itemData)
    elseif itemData.type == 'server' then
        TriggerServerEvent(itemData.event, itemData)
    end
end)]]

RegisterCommand('radialfix', function()
    SetNuiFocus(false, false)
    exports['mythic_notify']:DoHudText('inform', 'Radialmenu korjattu!', { ['background-color'] = '#0384fc', ['color'] = '#ffffffff' })
end)
