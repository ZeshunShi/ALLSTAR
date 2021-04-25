npx caliper bind --caliper-bind-sut fabric --caliper-bind-sdk 1.4.0

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/4

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/5

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new1.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/6

sleep 60




npx caliper bind --caliper-bind-sut ethereum --caliper-bind-sdk 1.2.1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/4

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/5

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new1.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/6

sleep 60




npx caliper bind --caliper-bind-sut besu --caliper-bind-sdk 1.3.2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/4

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/5

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new1.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/6

sleep 60



npx caliper bind --caliper-bind-sut iroha --caliper-bind-sdk 0.6.3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/4

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/5

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new1.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/6

sleep 60




cd /Users/zeshunshi/Downloads/benchmarkingHyperledgerplatforms-master/packages/caliper-application/scripts

node run-benchmark.js -c ../benchmark/simple/new.yaml -n ../network/sawtooth-poet/sawtooth-poet-2-validators/sawtooth.json

sleep 60

node run-benchmark.js -c ../benchmark/simple/new.yaml -n ../network/sawtooth-poet/sawtooth-poet-2-validators/sawtooth.json

sleep 60

node run-benchmark.js -c ../benchmark/simple/new.yaml -n ../network/sawtooth-poet/sawtooth-poet-2-validators/sawtooth.json

sleep 60

node run-benchmark.js -c ../benchmark/simple/new.yaml -n ../network/sawtooth-poet/sawtooth-poet-2-validators/sawtooth.json

sleep 60

node run-benchmark.js -c ../benchmark/simple/new.yaml -n ../network/sawtooth-poet/sawtooth-poet-2-validators/sawtooth.json

sleep 60

node run-benchmark.js -c ../benchmark/simple/new1.yaml -n ../network/sawtooth-poet/sawtooth-poet-2-validators/sawtooth.json




