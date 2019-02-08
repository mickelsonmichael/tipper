$(".tipper[data-tooltip]").on("mouseenter", PositionTooltip);

function PositionTooltip(event) {
    var tooltip = event.target;

    if (tooltip.classList.contains("tipper"))
        tooltip = $(event.target).find(".tipper-content")[0];

    var position = tooltip.getBoundingClientRect();

    if (position.left < 0) {
        let spillover = position.left * - 1;

        tooltip.style.marginLeft = spillover + "px";
    }

    if (position.right > document.body.clientWidth) {
        let spillover = position.right - document.body.clientWidth;
        spillover = spillover * -1;

        tooltip.style.marginLeft = spillover + "px";
    }
}

// Position fixed tooltips on hover
$(document).on("mouseenter", ".tipper--fixed", function () {
    let $target = $(this);
    let $tooltip = $target.find(".tipper__content");
    let targetPosition = this.getBoundingClientRect();

    // for right side tooltips
    if ($tooltip.hasClass("tipper__content--right")) {
        let right = targetPosition.right + 10;
        let middle = targetPosition.bottom - $target.innerHeight() / 2;

        $tooltip.css("left", right + "px")
            .css("top", middle + "px");
    }
    // for top tooltiops
    else {
        let top = window.innerHeight - targetPosition.top + 10;
        let center = targetPosition.right - $target.innerWidth() / 2;
        
        $tooltip.css("left", center + "px")
            .css("bottom", top + "px");
    }
});