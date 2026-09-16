(() => {
  'use strict';
  const form = document.getElementById('product-form');
  const preview = document.getElementById('preview');
  const status = document.getElementById('lab-status');
  const download = document.getElementById('download-draft');
  let draft = null;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    for (const key of Object.keys(values)) values[key] = values[key].trim();
    if (!values.productName || !values.sku || !values.sellingPoints) {
      status.textContent = '商品名稱、SKU 與賣點不能只填空白。';
      return;
    }
    draft = values;
    const fields = { name: values.productName, sku: values.sku, price: 'NT$ ' + Number(values.price).toLocaleString('zh-TW'), shipping: values.shipping, points: values.sellingPoints, pending: values.pending || '未填寫' };
    for (const [key, value] of Object.entries(fields)) document.getElementById('preview-' + key).textContent = value;
    preview.hidden = false;
    document.getElementById('preview-empty').hidden = true;
    download.disabled = false;
    status.textContent = '草稿已建立，請核對內容後下載。尚未上架任何商品。';
  });
  form.addEventListener('input', () => {
    if (draft) {
      download.disabled = true;
      status.textContent = '資料已修改，請重新建立預覽後再下載。';
    }
  });
  download.addEventListener('click', () => {
    if (!draft || download.disabled) return;
    const text = [
      '# 商品草稿（虛構練習資料）', '',
      '商品名稱：' + draft.productName, 'SKU：' + draft.sku,
      '售價：NT$ ' + draft.price, '配送方式：' + draft.shipping,
      '', '## 已確認賣點', draft.sellingPoints,
      '', '## 待確認事項', draft.pending || '未填寫',
      '', '狀態：僅為本機下載草稿，未發布到正式商店。', ''
    ].join('\n');
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'product-draft.md';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    status.textContent = '已觸發草稿下載，請在瀏覽器下載項目中確認 product-draft.md。';
  });
})();
