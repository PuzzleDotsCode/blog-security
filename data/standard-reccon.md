







* reccon

```
nmap --min-rate 5000 -T20 -O -p- --open -Pn -sC 10.129.130.219

gobuster dir -u http://10.129.130.219 -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -t 20 


```

## Objetives

## Networking

* Connection
    * Brute forcing
    * Default Credentials
    * Port Forwarding
* Download data
    * Path Traversal 
        * Local File Inclusion
        * Remote File Inclusion
    * Extract information
* Upload data    
    * Reverse Shell

## Web

## Standards against services

* Enumeration
    * smb by default credentials
* Brute Forcing



## Reccon targerts

* Directory Listing (spidering), surface:
    * hidden/private folders
    * Files as backups, credentials, weaponable extensions

* Forcing Errors








