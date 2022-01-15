// For less GPU consumption. 
export default function disable(thisClass: string, disableClass: string) {
    let isDisable = false;
    const el = document.querySelector(thisClass)!;
    const check = ()  => {
        const coords = el.getBoundingClientRect();
        if (coords.top < 1 && !isDisable) {
            isDisable = true;
            document.querySelector(disableClass)!
                .classList.add("visible-none");    
        } else if (coords.top > 1 && isDisable) {
            isDisable = false;
            document.querySelector(disableClass)!
                .classList.remove("visible-none");
        }   
    }
    window.addEventListener("scroll", check);
    window.addEventListener("resize", check);
}