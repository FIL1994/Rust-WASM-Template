/**
 * @author Philip Van Raalte
 * @date 2018-01-22
 */

(
  function() {
    // promises
    let importObject;

    fetch('wasm_test.wasm').then(res =>
      res.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes, importObject)
    ).then(results => {
      const add = results.instance.exports.add;
      const subtract = results.instance.exports.subtract;
      const loop_add = results.instance.exports.loop_add;
    });
  }
)();

(
  async () => {
    // es7
    let importObject;
    const res = await fetch('wasm_test.wasm');
    const bytes = await res.arrayBuffer();
    const results = await WebAssembly.instantiate(bytes, importObject);

    const {add, subtract, loop_add} = results.instance.exports;
    console.log("Loading wasm ");
    console.log(add(2, 2), subtract(10, 5), loop_add(6));

    window.add = add;
    window.subtract = subtract;
    window.loop_add = loop_add;
  }
)();