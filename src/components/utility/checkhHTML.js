const checkhtml = (id)=>{
    const html = document.getElementById(`${id}`);
    const styles  = window.getComputedStyle(html);

    if(styles.getPropertyValue("color") === 'red'){
        alert('both matched perfectly 21');
    }
}

export default checkhtml;