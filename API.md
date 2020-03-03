# Chat Room API

Here are the list of APIs and how you can use them using the Terminal command.

### Getting the chat data (GET)

* Terminal command: 
```
curl -X GET https://cuinjune-chat-room.glitch.me/api/v1/chat/data
```
* Returned value example: 
```
[{"name":"David","message":"Anyone here?"},{"name":"Peter","message":"Hey David, How's it going?"},{"name":"Guest3","message":"Hello?"},{"name":"Guest5","message":"Hi"}]
```

### Adding the chat data (POST)

* Terminal command:
```
curl -d "name='Bob'&message='Good Morning!'" https://cuinjune-chat-room.glitch.me/api/v1/chat/data
```

* Returned value example: 
```
[{"name":"David","message":"Anyone here?"},{"name":"Peter","message":"Hey David, How's it going?"},{"name":"Guest3","message":"Hello?"},{"name":"Guest5","message":"Hi"}, {"name":"Bob","message":"Good Morning"}]
```

### Clearing the chat data (DELETE)

* Terminal command:
```
curl -X DELETE https://cuinjune-chat-room.glitch.me/api/v1/chat/data
```

* Returned value example: 
```
[]
```

### Getting the number of visitors (GET)

* Terminal command:
```
curl -X GET https://cuinjune-chat-room.glitch.me/api/v1/chat/numvisitors
```

* Returned value example: 
```
15
```

### Updating the number of visitors (PUT)

* Terminal command:
```
curl -X PUT https://cuinjune-chat-room.glitch.me/api/v1/chat/numvisitors/3
```

* Returned value example: 
```
3
```
