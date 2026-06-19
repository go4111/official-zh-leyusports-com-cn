// public/site-helper.js

const siteHelper = (() => {
  const config = {
    officialUrl: 'https://official-zh-leyusports.com.cn',
    brandName: '乐鱼体育',
    tagVariants: [
      '体育赛事', '电竞投注', '真人娱乐', '棋牌游戏', 'VIP服务'
    ]
  };

  function createTagBadge(text, container) {
    const span = document.createElement('span');
    span.textContent = text;
    span.style.display = 'inline-block';
    span.style.padding = '4px 12px';
    span.style.margin = '4px 6px';
    span.style.borderRadius = '20px';
    span.style.backgroundColor = '#f97316';
    span.style.color = '#fff';
    span.style.fontSize = '0.85rem';
    span.style.fontWeight = '600';
    span.style.boxShadow = '0 2px 6px rgba(249,115,22,0.3)';
    container.appendChild(span);
  }

  function createInfoCard(title, description, container) {
    const card = document.createElement('div');
    card.style.border = '1px solid #e5e7eb';
    card.style.borderRadius = '12px';
    card.style.padding = '20px';
    card.style.margin = '16px 0';
    card.style.backgroundColor = '#ffffff';
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
    card.style.maxWidth = '480px';

    const titleEl = document.createElement('h3');
    titleEl.textContent = title;
    titleEl.style.margin = '0 0 8px 0';
    titleEl.style.fontSize = '1.25rem';
    titleEl.style.color = '#1f2937';

    const descEl = document.createElement('p');
    descEl.textContent = description;
    descEl.style.margin = '0';
    descEl.style.fontSize = '0.95rem';
    descEl.style.lineHeight = '1.5';
    descEl.style.color = '#4b5563';

    card.appendChild(titleEl);
    card.appendChild(descEl);
    container.appendChild(card);
  }

  function createAccessGuide(container) {
    const guide = document.createElement('div');
    guide.style.marginTop = '24px';
    guide.style.padding = '20px';
    guide.style.borderRadius = '12px';
    guide.style.backgroundColor = '#f0f9ff';
    guide.style.border = '1px solid #bae6fd';
    guide.style.maxWidth = '480px';

    const heading = document.createElement('h4');
    heading.textContent = `🔗 访问 ${config.brandName} 官方说明`;
    heading.style.margin = '0 0 12px 0';
    heading.style.color = '#0369a1';
    heading.style.fontSize = '1.1rem';

    const link = document.createElement('a');
    link.href = config.officialUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = config.officialUrl;
    link.style.color = '#0284c7';
    link.style.wordBreak = 'break-all';

    const note = document.createElement('p');
    note.textContent = '请认准唯一官方网址，谨防仿冒站点。推荐使用最新版浏览器访问以获得最佳体验。';
    note.style.margin = '12px 0 0 0';
    note.style.fontSize = '0.9rem';
    note.style.color = '#475569';

    guide.appendChild(heading);
    guide.appendChild(link);
    guide.appendChild(note);
    container.appendChild(guide);
  }

  function init(rootSelector) {
    const root = document.querySelector(rootSelector);
    if (!root) {
      console.warn(`siteHelper: 未找到容器 ${rootSelector}`);
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.style.padding = '8px 0';

    const tagContainer = document.createElement('div');
    tagContainer.style.marginBottom = '8px';
    const tagLabel = document.createElement('span');
    tagLabel.textContent = `🏷️ ${config.brandName} 热门关键词：`;
    tagLabel.style.fontWeight = '600';
    tagLabel.style.marginRight = '8px';
    tagLabel.style.fontSize = '0.95rem';
    tagContainer.appendChild(tagLabel);

    config.tagVariants.forEach(tag => createTagBadge(tag, tagContainer));
    wrapper.appendChild(tagContainer);

    createInfoCard(
      `欢迎来到 ${config.brandName}`,
      `${config.brandName} 为您提供丰富多样的在线娱乐体验，涵盖体育赛事、电竞、真人娱乐等多个领域。平台致力于打造安全、公平、便捷的互动环境。`,
      wrapper
    );

    createInfoCard(
      '平台特色',
      '实时赛事数据、高清直播、极速存取款、7×24小时客服支持。所有游戏均经过权威机构认证，确保公平公正。',
      wrapper
    );

    createAccessGuide(wrapper);
    root.appendChild(wrapper);
  }

  return { init };
})();

// 使用示例：在页面某个容器中插入提示卡片、关键词徽章和访问说明
// siteHelper.init('#app');