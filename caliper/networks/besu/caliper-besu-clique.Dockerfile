FROM hyperledger/besu:1.3.2
COPY ./data/ /root/
VOLUME [ "/root/.ethereum/keystore/" ]
ENTRYPOINT [ "/opt/besu/bin/besu", "--genesis-file=/root/genesis.json", "--node-private-key-file=/root/.ethereum/keystore/key" ]
