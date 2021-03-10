require("./utilities/loaders/loadCheatsheetStyles");

function setActiveItem() {
    const hash = window.location.hash;

    if (hash === "") {
        return;
    }

    const link = document.querySelector('.bd-aside a[href="' + hash + '"]');
    const active = document.querySelector(".bd-aside .active");
    const linkParentNode = link.parentNode.parentNode as HTMLElement;
    const parent = linkParentNode.previousElementSibling as HTMLElement;

    link.classList.add("active");

    if (parent.classList.contains("collapsed")) {
        parent.click();
    }

    if (!active) {
        return;
    }

    const activeParentNode = active.parentNode.parentNode as HTMLElement;
    const expanded = activeParentNode.previousElementSibling as HTMLElement;

    active.classList.remove("active");

    if (expanded && parent !== expanded) {
        expanded.click();
    }
}

window.addEventListener("DOMContentLoaded", () => {
    import("bootstrap").then(({ Tooltip, Popover, Toast }) => {
        // Tooltip and popover demos
        document.querySelectorAll(".tooltip-demo").forEach((tooltip) => {
            const bsTooltip = new Tooltip(tooltip, {
                selector: '[data-bs-toggle="tooltip"]',
            });
        });

        document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
            const bsPopover = new Popover(popover);
        });

        document.querySelectorAll(".toast").forEach((toastNode) => {
            const toast = new Toast(toastNode, {
                autohide: false,
            });

            toast.show();
        });

        // Disable empty links
        document.querySelectorAll('[href="#"]').forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
            });
        });

        setActiveItem();
    });
});
window.addEventListener("hashchange", setActiveItem);
