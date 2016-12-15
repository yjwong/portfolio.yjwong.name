# Background

[Steam In-Home Streaming](http://store.steampowered.com/streaming/) is one of the
best game streaming implementations around in terms of latency and overhead. However,
it's only constrained to work with other computers within the same subnet (or 
more specifically, within the same broadcast domain).

There isn't actually any other limitation that prevents IHS from working across
subnets, except for the discovery protocol. [Third parties](https://codingrange.com/blog/steam-in-home-streaming-discovery-protocol)
have done extensive analysis of the protocol, which uses mainly Google's
[Protocol Buffers](https://developers.google.com/protocol-buffers/).

In order to get IHS to work across subnets, I have written a tool that intercepts
and forwards Steam's UDP discovery packets to a destination subnet.

# Challenges

There are numerous challenges in implementing this solution:

## Steam Binds to Port 27036 Exclusively

On Windows, it appears that Steam binds to port 27036 with the option
`SO_EXCLUSIVEADDRUSE`. This meant it was not possible for any UDP server to 
listen on the same port, even with `SO_REUSEADDR`. Even if `SO_EXCLUSIVEADDRUSE`
was not used by the Steam client, Microsoft notes that "the behavior is undefined
as to which socket will receive packets" ([MSDN](https://msdn.microsoft.com/en-us/library/windows/desktop/cc150667(v=vs.85).aspx)).

## Steam Uses the IP Header to Determine Peer Address

During peer discovery, Steam client broadcasts a discovery packet. Other clients
that receive that packet use the source address of the packet to determine the
address of the discovered peer. Since I'm trying to propagate the discovery
packet across subnets, the client in the destination subnet would not receive
a packet with the correct source address.

This meant I had to fake the source address of the discovery packet to trick
the Steam client into obtaining the correct peer.

# Solution

To solve the first problem, I used [WinPcap](https://www.winpcap.org/), a packet
capture library, to capture the Steam discovery UDP packets. Then, I modified the
source address of these UDP packets and unicasted them to a destination Steam
client.

# Technology

WinPcap, Node.js
