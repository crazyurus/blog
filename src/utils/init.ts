export function initBackground(color: string) {
  let canvas = document.getElementById('canvas') as HTMLCanvasElement;
  let context = canvas.getContext('2d')!;
  let width = (canvas.width = window.outerWidth);
  let height = (canvas.height = window.outerHeight);
  let font = 12;
  let cols = 0;
  let dys: number[] = [];
  let matrix = '';
  let matrixSize = 20;
  let raf: number;
  for (let i = 0; i < matrixSize; ++i) {
    matrix += Math.floor(Math.random() * 2);
  }

  function initData() {
    cols = width / font;
    for (let i = 0; i < cols; ++i) {
      dys[i] = Math.floor(Math.random() * cols);
    }
  }

  function draw() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, width, height);
    context.fillStyle = color;
    context.font = `${font}px`;
    for (let i = 0; i < cols; ++i) {
      let txt = matrix[Math.floor(Math.random() * matrixSize)];
      context.fillText(txt, i * font, dys[i] * font);
      if (dys[i] * font > height) {
        dys[i] = Math.floor(Math.random() * cols);
      }
      dys[i]++;
    }

    raf = requestAnimationFrame(draw);
  }

  initData();
  draw();

  const listener = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initData();
  };

  window.addEventListener('resize', listener);

  return () => {
    window.removeEventListener('resize', listener);
    cancelAnimationFrame(raf);
  };
}
