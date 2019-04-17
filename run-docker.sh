#!/bin/sh
ssh_priv_key="$(cat ~/.ssh/id_rsa)" ssh_pub_key="$(cat ~/.ssh/id_rsa.pub)" docker-compose -f docker-compose.yml up
