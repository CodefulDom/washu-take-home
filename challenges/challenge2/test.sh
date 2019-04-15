#!/bin/bash

sample1answer() {
    echo ""
    echo "Project 2	2015-03-15 14:14:14	Sample 7"
    echo "Project 3	2015-03-10 14:14:14	Sample 9"
}

sample2answer() {
    echo ""
    echo "Heart	2015-03-10 14:14:14	20602865-4676-45dc-a755-7602b6a1d2c4"
}

all_input=""
while read new_input; do
    all_input="${all_input}\n$new_input"
done

if diff <(printf "$all_input\n") <(sample1answer) > /dev/null; then
    echo "PASS"
else
    if diff <(printf "$all_input\n") <(sample2answer) > /dev/null; then
        echo "PASS"
    else
        echo "FAIL"
    fi
fi

awk '{if (NR!=1) {print $1"\t" $2"\t" $6, $7 "\t"$9, $10}}' sample1.tsv | grep /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/ | grep "completed"
