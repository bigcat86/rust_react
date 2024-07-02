use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[derive(Serialize, Deserialize)]
pub struct Person {
    name: String,
    age: u32,
}

#[wasm_bindgen]
pub fn serialize_person(name: &str, age: u32) -> String {
    let person = Person {
        name: name.to_string(),
        age,
    };
    serde_json::to_string(&person).unwrap()
}

#[wasm_bindgen]
pub fn deserialize_person(json: &str) -> String {
    let person: Person = serde_json::from_str(json).unwrap();
    format!("{} is {} years old", person.name, person.age)
}
