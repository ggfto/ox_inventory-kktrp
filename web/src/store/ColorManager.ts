export class ColorManager {
  private colors: Record<string, string>;

  constructor(initialColors: Record<string, string>) {
    this.colors = { ...initialColors };
  }

  setColor(key: string, value: string) {
    if (key && value) {
      this.colors[key] = value;
    }
  }

  getColor(key: string): string | undefined {
    return this.colors[key];
  }

  getAllColors(): Record<string, string> {
    return { ...this.colors };
  }
}

// Instância global para gerenciar cores
export const colorManager = new ColorManager({
  primary: '#fc5185',
  secondary: '#121212',
  text: '#f8f9fa',
  danger: '#d32f2f', // Vermelho forte para erro
  warning: '#f59f00', // Amarelo alaranjado para alerta
  success: '#2dce89', // Verde mais escuro para diferenciar do primário
  info: '#0090ff', // Azul vibrante para informações
});
