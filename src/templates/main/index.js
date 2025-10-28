export function loopwhatever() {
        let imageloop = document.querySelectorAll('img');
    // let imageloop = document.createElement('<img class="size-full max-h-80 object-cover rounded-sm" src="https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g"');
    for (let i = 0; i < 6; i++) {
        imageloop += '${imageloop} ${i + 1}">';
    }
    return imageloop;
    
}