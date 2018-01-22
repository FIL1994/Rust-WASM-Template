#Rust-WASM-Template

NOTE: this is for windows only

## Use Rust Nightly


```
rustup toolchain install nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

functions accessible to WebAssmebly need to be marked with #[no_mangle]

## Using NPM

```
 npm install
 // build project
 npm run build
 // run project
 npm run start
```

## Getting WASM
```
// es7 async await
(
  async () => {
   
    let importObject;
    const res = await fetch('wasm_test.wasm');
    const bytes = await res.arrayBuffer();
    const results = await WebAssembly.instantiate(bytes, importObject);

    const {add, subtract, loop_add} = results.instance.exports;
  }
)();
```