---
title: 'Local Port Forwarding'
desc: 'Connect a remote syste to a local port enable direct access.'
tags: 'technique,tools'
---


# Local port forwarding

Connect a remote system to a local port enable direct access.

* Post Penetration technique
    * SSH tunneling: Open a port in the remote host and connect it with a port on the localhost

```
# Example: ssh -L [attacker-port]:[victim-address]:[victim-port] -N -T [victim-username]@[victim-address]
ssh -L 9999:example.org:80 -N -T username@remote_host
```