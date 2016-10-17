
#FreeCodeCamp Backend API Project: Timestamp Microservice
##User stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

##Example usage:
```url
https://timestamp-api-shubg100.c9users.io/June 24, 2016
https://timestamp-api-shubg100.c9users.io/1466726400
```

##Example output:
```json
{"unix":"1466726400","natural":"June 24, 2016"}
```
