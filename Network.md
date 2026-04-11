Networking & HTTP - Practical README
# Objective
Understand how Frontend communicates with Backend using HTTP, DNS, and networking layers.
## Network Basics
A network is a group of connected devices that share data.
Sender: sends data | Receiver: receives data | Protocol: communication rules (HTTP, TCP, UDP)
## Request-Response Cycle
1. User sends request from frontend 2. DNS resolves domain to IP 3. HTTP request is sent 4. Data
split using TCP/UDP 5. Routed via Network Layer 6. Server processes request 7. Response returns
same path (reverse) 8. Frontend displays result
## DNS
Converts domain names like google.com into IP addresses.
## HTTP Request Structure
Method | URL | Headers | Body (optional) | ## Query Parameters
## HTTP Methods
GET → Retrieve data
POST → Create/add data
PUT → Update all data
PATCH → Update part of data
DELETE → Remove data
OPTIONS / HEAD → Get server info
## TCP vs UDP
TCP: reliable, ordered, slower (used in web & APIs)
UDP: faster, no guarantee (used in games & streaming)
## HTTP Response Example
HTTP/1.1 200 OK
Content-Type: application/json
{
"message": "success"
}
## Status Codes
2xx: Success (200 OK, 201 Created) 4xx: Client Errors (400, 401, 403, 404) 5xx: Server Errors
(500, 503)
## Layers
Application (HTTP) | Transport (TCP/UDP) | Network (IP & Routing)
## Summary
Frontend → DNS → TCP → Network → Server → Response
