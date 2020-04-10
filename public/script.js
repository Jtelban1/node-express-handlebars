function devour(id) {
    $.ajax({
        method: "post",
        url: "api/devour/" + id,
    }).done(() => {
        window.location.reload();
    });
}
