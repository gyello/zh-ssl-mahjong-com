// public/site-helper.js
// 页面辅助模块：生成提示卡片、关键词徽章和访问说明

(function() {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://zh-ssl-mahjong.com',
    keyword: '麻将胡了',
    cardTitle: '欢迎访问',
    badgeColor: '#e91e63',
    badgeBg: '#fff3f5'
  };

  // 缓存DOM引用
  let container = null;

  // 创建容器
  function createContainer() {
    const div = document.createElement('div');
    div.id = 'site-helper-container';
    div.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;font-family:sans-serif;max-width:320px;';
    document.body.appendChild(div);
    return div;
  }

  // 生成提示卡片
  function createTipCard() {
    const card = document.createElement('div');
    card.style.cssText = 'background:#fff;border:1px solid #ddd;border-radius:12px;padding:16px;box-shadow:0 4px 12px rgba(0,0,0,0.1);margin-bottom:12px;';

    const title = document.createElement('h3');
    title.textContent = CONFIG.cardTitle;
    title.style.cssText = 'margin:0 0 8px;font-size:16px;color:#333;';

    const desc = document.createElement('p');
    desc.textContent = '欢迎体验「' + CONFIG.keyword + '」的乐趣，本站提供丰富的麻将游戏内容。';
    desc.style.cssText = 'margin:0 0 12px;font-size:13px;color:#666;line-height:1.5;';

    const link = document.createElement('a');
    link.href = CONFIG.siteUrl;
    link.textContent = '进入官网 →';
    link.target = '_blank';
    link.style.cssText = 'display:inline-block;padding:8px 16px;background:#e91e63;color:#fff;border-radius:6px;text-decoration:none;font-size:13px;transition:background 0.2s;';
    link.addEventListener('mouseenter', function() { this.style.background = '#c2185b'; });
    link.addEventListener('mouseleave', function() { this.style.background = '#e91e63'; });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
    return card;
  }

  // 生成关键词徽章
  function createBadge() {
    const badge = document.createElement('span');
    badge.textContent = CONFIG.keyword;
    badge.style.cssText = 'display:inline-block;padding:4px 12px;background:' + CONFIG.badgeBg + ';color:' + CONFIG.badgeColor + ';border:1px solid ' + CONFIG.badgeColor + ';border-radius:20px;font-size:12px;font-weight:bold;margin-bottom:8px;';
    return badge;
  }

  // 生成访问说明
  function createAccessNote() {
    const note = document.createElement('div');
    note.style.cssText = 'background:#f9f9f9;border:1px solid #eee;border-radius:8px;padding:12px;font-size:12px;color:#888;line-height:1.6;';

    const p1 = document.createElement('p');
    p1.textContent = '🔹 本页面为示例演示，实际功能请访问官网。';
    p1.style.margin = '0 0 6px';

    const p2 = document.createElement('p');
    p2.textContent = '🔹 关键词「' + CONFIG.keyword + '」为热门搜索词，请合理使用。';
    p2.style.margin = '0 0 6px';

    const p3 = document.createElement('p');
    p3.textContent = '🔹 官网地址：' + CONFIG.siteUrl;
    p3.style.margin = '0';

    note.appendChild(p1);
    note.appendChild(p2);
    note.appendChild(p3);
    return note;
  }

  // 初始化
  function init() {
    container = createContainer();

    const badge = createBadge();
    const card = createTipCard();
    const note = createAccessNote();

    container.appendChild(badge);
    container.appendChild(card);
    container.appendChild(note);
  }

  // 页面加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();