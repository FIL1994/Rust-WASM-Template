extern crate json;

#[no_mangle]
pub fn add(a:i32, b:i32) -> i32 {
    a + b
}

#[no_mangle]
pub fn subtract(a:i32, b:i32) -> i32 {
    a - b
}

#[no_mangle]
pub fn loop_add(times: i32) -> i32 {
    let mut total = 0;
    for _x in 0..times {
        total += 1;
    }
    total
}