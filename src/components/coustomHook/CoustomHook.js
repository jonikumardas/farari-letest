const UseHook = () => {
    fetch("CoustomData.json")
        .then(res => res.json())
        .then(data => console.log(data));
}
console.log(UseHook());