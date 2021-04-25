npx caliper bind --caliper-bind-sut fabric --caliper-bind-sdk 1.4.0

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new1.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/7

sleep 60

npx caliper bind --caliper-bind-sut ethereum --caliper-bind-sdk 1.2.1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new1.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/7

sleep 60

npx caliper bind --caliper-bind-sut besu --caliper-bind-sdk 1.3.2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new1.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/7

sleep 60

npx caliper bind --caliper-bind-sut iroha --caliper-bind-sdk 0.6.3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new1.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/7

sleep 60


cd /Users/zeshunshi/Downloads/benchmarkingHyperledgerplatforms-master/packages/caliper-application/scripts

sleep 60

node run-benchmark.js -c ../benchmark/simple/new1.yaml -n ../network/sawtooth-poet/sawtooth-poet-2-validators/sawtooth.json
