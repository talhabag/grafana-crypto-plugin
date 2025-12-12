import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from '../types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme2();
  const styles = useStyles2(getStyles);

  const series = data.series[0];
  if (!series) {
    return <div className={styles.textBox}>Veri Yükleniyor...</div>;
  }

  // Sütunları buluyoruz
  const nameField = series.fields.find((f) => f.name === 'name');
  const priceField = series.fields.find((f) => f.name === 'price');
  const changeField = series.fields.find((f) => f.name === 'change');
  const historyField = series.fields.find((f) => f.name === 'history');

  if (!nameField || !priceField) {
    return <div className={styles.textBox}>⚠️ Sütunlar eksik! (name, price)</div>;
  }

  return (
    <div className={cx(styles.wrapper, css`width: ${width}px; height: ${height}px; display: flex; flex-direction: column;`)}>
      {/* Tablo Alanı: Esnek olup yukarıyı kaplasın */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Coin</th>
              <th className={styles.th} style={{ textAlign: 'right' }}>Fiyat ($)</th>
              <th className={styles.th} style={{ textAlign: 'right' }}>Değişim</th>
              <th className={styles.th} style={{ textAlign: 'center' }}>Son 7 Gün</th>
            </tr>
          </thead>
          <tbody>
            {nameField.values.map((name, i) => {
              const price = priceField.values.get(i);
              const change = changeField ? changeField.values.get(i) : 0;
              const historyRaw = historyField ? historyField.values.get(i) : [];

              // --- Hata Korumalı Veri İşleme ---
              let historyData: number[] = [];
              try {
                 if (Array.isArray(historyRaw)) {
                   historyData = historyRaw;
                 } else if (typeof historyRaw === 'string') {
                   historyData = JSON.parse(historyRaw);
                 }
              } catch (err) { historyData = []; }
              
              if (!Array.isArray(historyData)) historyData = [];

              const isPositive = change >= 0;

              return (
                <tr key={i} className={styles.tr}>
                  <td className={styles.td} style={{ fontWeight: 'bold', color: theme.colors.text.primary }}>
                    {name}
                  </td>
                  <td className={styles.td} style={{ textAlign: 'right', fontFamily: 'monospace' }}>
                    ${Number(price).toLocaleString()}
                  </td>
                  <td className={styles.td} style={{ textAlign: 'right', color: isPositive ? theme.colors.success.text : theme.colors.error.text }}>
                     {isPositive ? '▲' : '▼'} %{Math.abs(change).toFixed(2)}
                  </td>
                  <td className={styles.td}>
                     <Sparkline data={historyData} color={isPositive ? theme.colors.success.main : theme.colors.error.main} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* --- İMZA ALANI (Footer) --- */}
      <div className={styles.footer}>
        Talha Bağ 2022502003 - MIS 233 Final Project
      </div>
    </div>
  );
};

// --- Sparkline Bileşeni ---
const Sparkline = ({ data, color }: { data: number[], color: string }) => {
  if (!Array.isArray(data) || data.length < 2) return null;
  const width = 100;
  const height = 30;
  let min = data[0], max = data[0];
  data.forEach(v => { if (v < min) min = v; if (v > max) max = v; });
  const range = max - min || 1;
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');
  return <svg width={width} height={height} style={{ display: 'block', margin: 'auto' }}><polyline points={points} fill="none" stroke={color} strokeWidth="2" /></svg>;
};

// --- STİLLER ---
const getStyles = (theme: any) => {
  return {
    wrapper: css`position: relative;`,
    textBox: css`padding: 10px; color: ${theme.colors.text.secondary};`,
    table: css`width: 100%; border-collapse: collapse;`,
    th: css`
      text-align: left; padding: 10px;
      border-bottom: 2px solid ${theme.colors.border.weak};
      color: ${theme.colors.text.secondary};
      font-size: 12px;
      position: sticky; top: 0; background-color: ${theme.colors.background.primary};
    `,
    tr: css`&:hover { background-color: ${theme.colors.action.hover}; }`,
    td: css`padding: 10px; border-bottom: 1px solid ${theme.colors.border.weak}; font-size: 14px;`,
    // Yeni eklenen Footer stili
    footer: css`
      padding: 8px 10px;
      text-align: right;
      font-size: 11px;
      color: ${theme.colors.text.disabled};
      border-top: 1px solid ${theme.colors.border.weak};
      background-color: ${theme.colors.background.secondary};
      font-family: monospace;
    `
  };
};
