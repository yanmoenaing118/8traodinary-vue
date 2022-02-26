import { onMounted } from "vue";
export default function ScrollTop() {
  onMounted(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}
