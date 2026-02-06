function towerOfHanoi(n, fromRod, toRod, auxRod) {
    if (n === 0) return;

    // Move n-1 disks from source to auxiliary
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);

    // Move the nth disk from source to destination
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

    // Move n-1 disks from auxiliary to destination
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
}

// Example: 3 disks
towerOfHanoi(3, 'A', 'C', 'B');
