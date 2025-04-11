let a = 0;
let b = 1;

while (b <= 100) {
    console.log(b);
    const next = a + b;
    a = b;
    b = next;
}

