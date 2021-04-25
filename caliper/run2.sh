npx caliper bind --caliper-bind-sut fabric --caliper-bind-sdk 1.4.0

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/read/1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/read/2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/read/3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/read/4

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/fabric/fabric.yaml

mv report.html /Users/zeshunshi/Desktop/Huan/result/fabric/read/5

sleep 60




npx caliper bind --caliper-bind-sut ethereum --caliper-bind-sdk 1.2.1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/read/1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/read/2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/read/3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/read/4

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/ethereum/ethereum.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/ethereum/read/5

sleep 60




npx caliper bind --caliper-bind-sut besu --caliper-bind-sdk 1.3.2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/read/1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/read/2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/read/3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/read/4

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/besu/besu.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/besu/read/5

sleep 60



npx caliper bind --caliper-bind-sut iroha --caliper-bind-sdk 0.6.3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/read/1

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/read/2

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/read/3

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/read/4

sleep 60

npx caliper benchmark run --caliper-workspace . --caliper-benchconfig benchmark/new.yaml --caliper-networkconfig networks/iroha/iroha.json

mv report.html /Users/zeshunshi/Desktop/Huan/result/iroha/read/5

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




