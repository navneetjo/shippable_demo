##CA-certificate setup 

#Instal the CA-certificate package
yum install ca-certificates

#Enable the dynamic CA configuration feature
update-ca-trust enable

#Add the CA certificate as a new file to /etc/pki/ca-trust/source/anchors
cp devdockerCA.crt /etc/pki/ca-trust/source/anchors

#copy .dockercfg file to /root/.dockercfg
cp .dockercfg /root/.dockercfg

update-ca-trust extract

#add the registry details to /etc/hosts file
echo "172.27.59.8  www.cybage-docker-registry.com"  >> /etc/hosts

#restart docker
service docker restart

