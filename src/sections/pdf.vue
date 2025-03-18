<template>
    <div class="pdf-container">
        <canvas ref="pdfCanvas"></canvas>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

export default {
    props: {
        pdfUrl: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const pdfCanvas = ref(null);

        onMounted(async () => {
            if (!pdfCanvas.value) return;
            const loadingTask = pdfjsLib.getDocument(props.pdfUrl);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 1.5 });
            const context = pdfCanvas.value.getContext("2d");
            pdfCanvas.value.width = viewport.width;
            pdfCanvas.value.height = viewport.height;
            const renderContext = { canvasContext: context, viewport: viewport };
            await page.render(renderContext).promise;
        });

        return { pdfCanvas };
    },
};
</script>

<style scoped>
.pdf-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f4f4f4;
}

canvas {
    border: 1px solid #ccc;
}
</style>