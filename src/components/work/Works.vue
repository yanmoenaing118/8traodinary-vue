<template>
    <section>
        <div class="wrapper">
            <div class="grid">
                <div class="item item--1">1</div>
                <div class="item item--2">2</div>
                <div class="item item--3">3</div>
                <div class="item item--4">4</div>
                <div class="item item--5">5</div>
                <div class="item item--6">6</div>
                <div class="item item--7">7</div>
                <div class="item item--8">8</div>
                <div class="item item--9">9</div>
                <div class="item item--10">10</div>
                <div class="item item--11">11</div>
                <div class="item item--12">12</div>
                <div class="item item--13">13</div>
                <div class="item item--14">14</div>
                <div class="item item--15">15</div>
                <div class="item item--16">16</div>
                <div class="item item--17">17</div>
                <div class="item item--18">18</div>
            </div>
        </div>
    </section>
</template>


<style scoped>
section {
    padding: var(--space-11) 0;
}
.wrapper {
  max-width: var(--max-width);
  margin: 0 auto;
}


.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6,minmax(230px, 1fr));
    grid-gap: var(--space-10);
}

.item {
    border: 1px solid #ccc;
    background-color: aliceblue;
}

.item--2 {
    grid-column: 2 / 3;
    grid-row: 1 / span 2;
}

.item--4 {
    grid-column: 4 / -1;
    grid-row: 1 / span 2;
}

.item--8 {
    grid-column: 1 / 2;
    grid-row: 3 / span 2;
}

.item--9 {
    grid-column: 3 / 4;
    grid-row: 3 / span 2;
}
</style>