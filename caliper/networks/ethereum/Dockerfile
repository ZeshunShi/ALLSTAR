FROM ethereum/client-go:stable
COPY ./data/ /root/
VOLUME [ "/root/.ethereum/keystore/" ]
RUN geth --nousb init /root/genesis.json && geth --nousb import /root/bc.dat
ENTRYPOINT [ "geth" ]
