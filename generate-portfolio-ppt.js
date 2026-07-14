const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

console.log("Starting Executive Portfolio Presentation Generation (Dynamic Archetypes A-E)...");

const pptx = new pptxgen();
pptx.defineLayout({ name: 'CUSTOM_13x7', width: 13.333, height: 7.5 });
pptx.layout = 'CUSTOM_13x7'; // Exact 13.333 x 7.5 inches (960 x 540 pt)

// --- Executive Color Palette ---
const COLORS = {
  NAVY_DARK: "0B132B",    // Background main
  SLATE_CARD: "1C2541",   // Pillar / Card fill
  BLUE_BORDER: "2D3748",  // Subtle border
  TEAL_NEON: "48CAE4",    // Primary accent / Header highlights
  GOLD_AMBER: "F59E0B",   // KPI / Warning / High-impact accent
  EMERALD_GREEN: "10B981",// Success / Live status / Metrics
  WHITE_PURE: "FFFFFF",
  TEXT_MUTED: "94A3B8",   // Subtitles / Secondary text
  CARD_DARKER: "0F172A",  // Inner dashboard frame fill
  PURPLE_ACCENT: "A855F7" // AI node / Special accents
};

// --- Helper: Slide Header Zone ---
function addSlideHeader(slide, categoryBadge, title, subtitle) {
  slide.background = { fill: COLORS.NAVY_DARK };

  // Category Badge Top Left
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 2.8, h: 0.32,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: COLORS.TEAL_NEON, width: 1.5 },
    rectRadius: 0.05
  });
  slide.addText(categoryBadge.toUpperCase(), {
    x: 0.5, y: 0.4, w: 2.8, h: 0.32,
    color: COLORS.TEAL_NEON, fontSize: 11, bold: true, align: "center", fontFace: "Segoe UI"
  });

  // Main Title
  slide.addText(title, {
    x: 3.5, y: 0.32, w: 9.3, h: 0.48,
    color: COLORS.WHITE_PURE, fontSize: 20, bold: true, fontFace: "Segoe UI"
  });

  // Subtitle Banner
  slide.addText(subtitle, {
    x: 0.5, y: 0.85, w: 12.33, h: 0.38,
    color: COLORS.TEXT_MUTED, fontSize: 13, italic: true, fontFace: "Segoe UI"
  });

  // Decorative Top Line
  slide.addShape(pptx.ShapeType.line, {
    x: 0.5, y: 1.28, w: 12.33, h: 0,
    line: { color: COLORS.BLUE_BORDER, width: 1.5 }
  });
}

// --- Helper: Render 3 Pillars in a specific box area ---
function render3PillarsBox(slide, x, y, w, h, pillars, orientation = "VERTICAL") {
  if (orientation === "VERTICAL") {
    // Stack 3 cards vertically inside (x, y, w, h) with precision zero-overflow padding
    const cardH = (h - 0.20) / 3;
    pillars.forEach((p, idx) => {
      const cy = y + idx * (cardH + 0.10);
      
      // Card Container
      slide.addShape(pptx.ShapeType.rect, {
        x: x, y: cy, w: w, h: cardH,
        fill: { color: COLORS.SLATE_CARD },
        line: { color: p.borderColor || COLORS.TEAL_NEON, width: 1.5 },
        rectRadius: 0.08
      });

      // Pillar Title
      slide.addText(p.title, {
        x: x + 0.15, y: cy + 0.05, w: w - 0.3, h: 0.26,
        color: p.color || COLORS.TEAL_NEON, fontSize: 12.5, bold: true, fontFace: "Segoe UI"
      });

      // Pillar Bullets / Content (Optimized to 9.5pt with tight margin to completely prevent over-page/clipping)
      const formattedBullets = p.bullets.map((b, bIdx) => ({
        text: b,
        options: { bullet: { type: "bullet", color: p.color || COLORS.TEAL_NEON }, breakLine: bIdx < p.bullets.length - 1 }
      }));
      slide.addText(formattedBullets, {
        x: x + 0.15, y: cy + 0.31, w: w - 0.3, h: cardH - 0.35,
        color: COLORS.WHITE_PURE, fontSize: 9.5, fontFace: "Segoe UI",
        valign: "top",
        margin: [0, 0.02, 0, 0.02]
      });
    });
  } else {
    // HORIZONTAL (Side by Side 3 cards)
    const cardW = (w - 0.30) / 3;
    pillars.forEach((p, idx) => {
      const cx = x + idx * (cardW + 0.15);
      
      slide.addShape(pptx.ShapeType.rect, {
        x: cx, y: y, w: cardW, h: h,
        fill: { color: COLORS.SLATE_CARD },
        line: { color: p.borderColor || COLORS.TEAL_NEON, width: 1.5 },
        rectRadius: 0.08
      });

      slide.addText(p.title, {
        x: cx + 0.12, y: y + 0.08, w: cardW - 0.24, h: 0.30,
        color: p.color || COLORS.TEAL_NEON, fontSize: 12.5, bold: true, fontFace: "Segoe UI"
      });

      const formattedBullets = p.bullets.map((b, bIdx) => ({
        text: b,
        options: { bullet: { type: "bullet", color: p.color || COLORS.TEAL_NEON }, breakLine: bIdx < p.bullets.length - 1 }
      }));
      slide.addText(formattedBullets, {
        x: cx + 0.12, y: y + 0.38, w: cardW - 0.24, h: h - 0.44,
        color: COLORS.WHITE_PURE, fontSize: 9.5, fontFace: "Segoe UI",
        valign: "top",
        margin: [0, 0.02, 0, 0.02]
      });
    });
  }
}

// ==============================================================================
// ARTIFACT ARCHETYPES A-E GENERATORS (NATIVE VECTOR UI/DIAGRAMS + 3 PILLARS)
// ==============================================================================

/**
 * ARCHETYPE A: "The Dashboard Split" (Asymmetric Left UI Mockup vs Right 3 Pillars)
 * Used for: Enterprise Portals, Super-Apps, Client Dashboards
 */
function renderArchetypeA(slide, category, title, subtitle, dashTitle, dashSub, kpiList, sidebarItems, pillars) {
  addSlideHeader(slide, category, title, subtitle);

  // LEFT ZONE: Dashboard UI Mockup Vector Wireframe (x: 0.5, y: 1.35, w: 4.8, h: 5.70)
  const dx = 0.5, dy = 1.35, dw = 4.8, dh = 5.70;
  slide.addShape(pptx.ShapeType.rect, {
    x: dx, y: dy, w: dw, h: dh,
    fill: { color: COLORS.CARD_DARKER },
    line: { color: COLORS.TEAL_NEON, width: 2 },
    rectRadius: 0.1
  });

  // Top Bar (macOS style dots)
  slide.addShape(pptx.ShapeType.rect, {
    x: dx, y: dy, w: dw, h: 0.45,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: COLORS.BLUE_BORDER, width: 1 }
  });
  slide.addShape(pptx.ShapeType.ellipse, { x: dx + 0.15, y: dy + 0.12, w: 0.2, h: 0.2, fill: { color: "EF4444" } });
  slide.addShape(pptx.ShapeType.ellipse, { x: dx + 0.45, y: dy + 0.12, w: 0.2, h: 0.2, fill: { color: "F59E0B" } });
  slide.addShape(pptx.ShapeType.ellipse, { x: dx + 0.75, y: dy + 0.12, w: 0.2, h: 0.2, fill: { color: "10B981" } });
  slide.addText(dashTitle, { x: dx + 1.1, y: dy + 0.08, w: dw - 1.2, h: 0.3, color: COLORS.WHITE_PURE, fontSize: 12, bold: true });

  // Sidebar Menu Wireframe
  slide.addShape(pptx.ShapeType.rect, {
    x: dx + 0.1, y: dy + 0.55, w: 1.3, h: dh - 0.65,
    fill: { color: COLORS.NAVY_DARK },
    line: { color: COLORS.BLUE_BORDER, width: 1 }
  });
  sidebarItems.forEach((item, idx) => {
    const sy = dy + 0.65 + idx * 0.45;
    if (idx === 0) {
      slide.addShape(pptx.ShapeType.rect, { x: dx + 0.15, y: sy, w: 1.2, h: 0.35, fill: { color: COLORS.TEAL_NEON }, rectRadius: 0.04 });
      slide.addText(item, { x: dx + 0.2, y: sy, w: 1.1, h: 0.35, color: COLORS.NAVY_DARK, fontSize: 10, bold: true });
    } else {
      slide.addText(item, { x: dx + 0.2, y: sy, w: 1.1, h: 0.35, color: COLORS.TEXT_MUTED, fontSize: 10 });
    }
  });

  // Main Dashboard Content Grid inside Mockup
  slide.addText(dashSub, { x: dx + 1.5, y: dy + 0.6, w: dw - 1.6, h: 0.4, color: COLORS.TEAL_NEON, fontSize: 13, bold: true });

  // Render 4 KPI Cards inside Mockup
  kpiList.forEach((kpi, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const kx = dx + 1.5 + col * 1.6;
    const ky = dy + 1.10 + row * 1.25;
    const colors = [COLORS.EMERALD_GREEN, COLORS.TEAL_NEON, COLORS.GOLD_AMBER, COLORS.PURPLE_ACCENT];
    
    slide.addShape(pptx.ShapeType.rect, {
      x: kx, y: ky, w: 1.5, h: 1.10,
      fill: { color: COLORS.SLATE_CARD },
      line: { color: colors[idx % colors.length], width: 1.5 },
      rectRadius: 0.06
    });
    slide.addText(kpi.label, { x: kx + 0.1, y: ky + 0.1, w: 1.3, h: 0.3, color: COLORS.TEXT_MUTED, fontSize: 10 });
    slide.addText(kpi.val, { x: kx + 0.1, y: ky + 0.45, w: 1.3, h: 0.55, color: COLORS.WHITE_PURE, fontSize: 17, bold: true });
  });

  // Chart Simulation Bar inside Mockup
  slide.addShape(pptx.ShapeType.rect, {
    x: dx + 1.5, y: dy + 3.80, w: dw - 1.65, h: 1.60,
    fill: { color: COLORS.NAVY_DARK },
    line: { color: COLORS.BLUE_BORDER, width: 1 }
  });
  slide.addText("Live System Throughput & Latency Audit", { x: dx + 1.6, y: dy + 3.90, w: dw - 1.8, h: 0.25, color: COLORS.TEXT_MUTED, fontSize: 9, bold: true });
  for (let b = 0; b < 10; b++) {
    const bx = dx + 1.65 + b * 0.3;
    const bh = 0.2 + ((b * 7) % 8) * 0.1;
    slide.addShape(pptx.ShapeType.rect, {
      x: bx, y: dy + 5.30 - bh, w: 0.2, h: bh,
      fill: { color: b % 2 === 0 ? COLORS.TEAL_NEON : COLORS.EMERALD_GREEN }
    });
  }

  // RIGHT ZONE: 3 Pillars Vertical Stack (x: 5.6, y: 1.35, w: 7.23, h: 5.70)
  render3PillarsBox(slide, 5.6, 1.35, 7.23, 5.70, pillars, "VERTICAL");
}

/**
 * ARCHETYPE B: "The Architectural Pipeline" (Top DAG / Architecture Flow Banner vs Bottom 3 Pillars)
 * Used for: AI Automation, Node Orchestration, Microfrontend Systems
 */
function renderArchetypeB(slide, category, title, subtitle, flowTitle, nodes, techBadges, pillars) {
  addSlideHeader(slide, category, title, subtitle);

  // TOP ZONE: DAG Architecture Flow Banner (x: 0.5, y: 1.35, w: 12.33, h: 2.20)
  const fx = 0.5, fy = 1.35, fw = 12.33, fh = 2.20;
  slide.addShape(pptx.ShapeType.rect, {
    x: fx, y: fy, w: fw, h: fh,
    fill: { color: COLORS.CARD_DARKER },
    line: { color: COLORS.PURPLE_ACCENT, width: 2 },
    rectRadius: 0.08
  });

  slide.addText(`⚡ DIRECTED ACYCLIC GRAPH (DAG) & SYSTEM PIPELINE: ${flowTitle}`, {
    x: fx + 0.2, y: fy + 0.08, w: fw - 0.4, h: 0.32,
    color: COLORS.TEAL_NEON, fontSize: 12.5, bold: true
  });

  // Render 5 Pipeline Nodes with Connecting Arrows
  const nodeW = 1.95;
  const gap = 0.55;
  nodes.forEach((nText, idx) => {
    const nx = fx + 0.35 + idx * (nodeW + gap);
    const ny = fy + 0.48;
    const isStartOrEnd = idx === 0 || idx === nodes.length - 1;

    // Node Card Shape
    slide.addShape(pptx.ShapeType.rect, {
      x: nx, y: ny, w: nodeW, h: 1.0,
      fill: { color: isStartOrEnd ? COLORS.TEAL_NEON : COLORS.SLATE_CARD },
      line: { color: isStartOrEnd ? COLORS.WHITE_PURE : COLORS.TEAL_NEON, width: 1.5 },
      rectRadius: 0.06
    });

    slide.addText(nText, {
      x: nx + 0.05, y: ny + 0.08, w: nodeW - 0.1, h: 0.84,
      color: isStartOrEnd ? COLORS.NAVY_DARK : COLORS.WHITE_PURE,
      fontSize: 10.5, bold: true, align: "center", valign: "middle"
    });

    // Arrow to next node
    if (idx < nodes.length - 1) {
      slide.addShape(pptx.ShapeType.rightArrow, {
        x: nx + nodeW + 0.08, y: ny + 0.35, w: gap - 0.16, h: 0.3,
        fill: { color: COLORS.GOLD_AMBER },
        line: { color: COLORS.GOLD_AMBER }
      });
    }
  });

  // Tech Stack Badges at bottom of top banner
  let badgeX = fx + 0.35;
  slide.addText("Core Engine Protocols:", { x: badgeX, y: fy + 1.65, w: 2.1, h: 0.35, color: COLORS.TEXT_MUTED, fontSize: 10.5, bold: true });
  badgeX += 2.1;
  techBadges.forEach(badge => {
    const bw = badge.length * 0.11 + 0.4;
    slide.addShape(pptx.ShapeType.rect, {
      x: badgeX, y: fy + 1.68, w: bw, h: 0.3,
      fill: { color: COLORS.SLATE_CARD },
      line: { color: COLORS.EMERALD_GREEN, width: 1 },
      rectRadius: 0.04
    });
    slide.addText(badge, { x: badgeX, y: fy + 1.68, w: bw, h: 0.3, color: COLORS.EMERALD_GREEN, fontSize: 9.5, bold: true, align: "center" });
    badgeX += bw + 0.15;
  });

  // BOTTOM ZONE: 3 Pillars Horizontal Grid (x: 0.5, y: 3.65, w: 12.33, h: 3.40)
  render3PillarsBox(slide, 0.5, 3.65, 12.33, 3.40, pillars, "HORIZONTAL");
}

/**
 * ARCHETYPE C: "The Hardware & Telemetry Grid" (Schematics vs Interlock Protection Cards)
 * Used for: IoT, Raspberry Pi GPIO, PLC/HMI Instrumentation
 */
function renderArchetypeC(slide, category, title, subtitle, hwSpecs, cloudSpecs, pillars) {
  addSlideHeader(slide, category, title, subtitle);

  // LEFT ZONE: Hardware Schematics & Signal Telemetry Card (x: 0.5, y: 1.35, w: 5.5, h: 5.70)
  const sx = 0.5, sy = 1.35, sw = 5.5, sh = 5.70;
  slide.addShape(pptx.ShapeType.rect, {
    x: sx, y: sy, w: sw, h: sh,
    fill: { color: COLORS.CARD_DARKER },
    line: { color: COLORS.GOLD_AMBER, width: 2 },
    rectRadius: 0.1
  });

  slide.addText("⚡ HARDWARE-TO-CLOUD TELEMETRY SCHEMATIC", {
    x: sx + 0.2, y: sy + 0.15, w: sw - 0.4, h: 0.35,
    color: COLORS.GOLD_AMBER, fontSize: 13, bold: true
  });

  // Left Inner Box: Physical Controller Unit
  slide.addShape(pptx.ShapeType.rect, {
    x: sx + 0.25, y: sy + 0.60, w: sw - 0.5, h: 2.15,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: COLORS.TEAL_NEON, width: 1.5 },
    rectRadius: 0.06
  });
  slide.addText("🔧 Physical Controller / GPIO & Interlock Specs:", { x: sx + 0.4, y: sy + 0.70, w: sw - 0.8, h: 0.3, color: COLORS.TEAL_NEON, fontSize: 12, bold: true });
  hwSpecs.forEach((spec, idx) => {
    slide.addText(`▪ ${spec}`, { x: sx + 0.4, y: sy + 1.05 + idx * 0.35, w: sw - 0.8, h: 0.35, color: COLORS.WHITE_PURE, fontSize: 11 });
  });

  // Connecting REST/MQTT Signal Bridge
  slide.addShape(pptx.ShapeType.rect, {
    x: sx + 1.2, y: sy + 2.85, w: sw - 2.4, h: 0.45,
    fill: { color: COLORS.GOLD_AMBER },
    rectRadius: 0.05
  });
  slide.addText("🔃 Bidirectional REST API / MQTT Telemetry Stream", { x: sx + 1.2, y: sy + 2.85, w: sw - 2.4, h: 0.45, color: COLORS.NAVY_DARK, fontSize: 11, bold: true, align: "center" });

  // Right/Bottom Inner Box: Cloud API & Remote Monitoring
  slide.addShape(pptx.ShapeType.rect, {
    x: sx + 0.25, y: sy + 3.40, w: sw - 0.5, h: 2.10,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: COLORS.EMERALD_GREEN, width: 1.5 },
    rectRadius: 0.06
  });
  slide.addText("🌐 Remote Railway Cloud & Telemetry Endpoints:", { x: sx + 0.4, y: sy + 3.50, w: sw - 0.8, h: 0.3, color: COLORS.EMERALD_GREEN, fontSize: 12, bold: true });
  cloudSpecs.forEach((spec, idx) => {
    slide.addText(`▪ ${spec}`, { x: sx + 0.4, y: sy + 3.85 + idx * 0.35, w: sw - 0.8, h: 0.35, color: COLORS.WHITE_PURE, fontSize: 11 });
  });

  // RIGHT ZONE: 3 Pillars Vertical Stack (x: 6.2, y: 1.35, w: 6.63, h: 5.70)
  render3PillarsBox(slide, 6.2, 1.35, 6.63, 5.70, pillars, "VERTICAL");
}

/**
 * ARCHETYPE D: "The Mobile & Client Dual-Frame" (Split Phone Wireframe vs 3 Pillars)
 * Used for: Mobile Apps, WhatsApp-style Chat, Client Recruitment Portals
 */
function renderArchetypeD(slide, category, title, subtitle, phone1Title, phone1Text, phone2Title, phone2Text, pillars) {
  addSlideHeader(slide, category, title, subtitle);

  // LEFT ZONE: Dual Phone Frame / Split Card (x: 0.5, y: 1.35, w: 4.8, h: 5.70)
  const mx = 0.5, my = 1.35, mw = 4.8, mh = 5.70;
  slide.addShape(pptx.ShapeType.rect, {
    x: mx, y: my, w: mw, h: mh,
    fill: { color: COLORS.CARD_DARKER },
    line: { color: COLORS.TEAL_NEON, width: 2 },
    rectRadius: 0.1
  });
  slide.addText("📱 DUAL MOBILE / CLIENT PORTAL WIREFRAME", { x: mx + 0.2, y: my + 0.12, w: mw - 0.4, h: 0.3, color: COLORS.TEAL_NEON, fontSize: 12, bold: true });

  // Phone 1 (Left Split)
  slide.addShape(pptx.ShapeType.rect, {
    x: mx + 0.25, y: my + 0.50, w: 2.0, h: 4.95,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: COLORS.TEAL_NEON, width: 1.5 },
    rectRadius: 0.15
  });
  slide.addShape(pptx.ShapeType.rect, { x: mx + 0.95, y: my + 0.60, w: 0.6, h: 0.08, fill: { color: COLORS.TEAL_NEON }, rectRadius: 0.03 });
  slide.addText(phone1Title, { x: mx + 0.3, y: my + 0.75, w: 1.9, h: 0.35, color: COLORS.TEAL_NEON, fontSize: 11, bold: true, align: "center" });
  phone1Text.forEach((t, idx) => {
    slide.addShape(pptx.ShapeType.rect, { x: mx + 0.35, y: my + 1.25 + idx * 0.85, w: 1.8, h: 0.65, fill: { color: COLORS.NAVY_DARK }, line: { color: COLORS.BLUE_BORDER, width: 1 }, rectRadius: 0.05 });
    slide.addText(t, { x: mx + 0.4, y: my + 1.25 + idx * 0.85, w: 1.7, h: 0.65, color: COLORS.WHITE_PURE, fontSize: 10, align: "center", valign: "middle" });
  });

  // Phone 2 (Right Split)
  slide.addShape(pptx.ShapeType.rect, {
    x: mx + 2.55, y: my + 0.50, w: 2.0, h: 4.95,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: COLORS.EMERALD_GREEN, width: 1.5 },
    rectRadius: 0.15
  });
  slide.addShape(pptx.ShapeType.rect, { x: mx + 3.25, y: my + 0.60, w: 0.6, h: 0.08, fill: { color: COLORS.EMERALD_GREEN }, rectRadius: 0.03 });
  slide.addText(phone2Title, { x: mx + 2.6, y: my + 0.75, w: 1.9, h: 0.35, color: COLORS.EMERALD_GREEN, fontSize: 11, bold: true, align: "center" });
  phone2Text.forEach((t, idx) => {
    slide.addShape(pptx.ShapeType.rect, { x: mx + 2.65, y: my + 1.25 + idx * 0.85, w: 1.8, h: 0.65, fill: { color: COLORS.NAVY_DARK }, line: { color: COLORS.BLUE_BORDER, width: 1 }, rectRadius: 0.05 });
    slide.addText(t, { x: mx + 2.7, y: my + 1.25 + idx * 0.85, w: 1.7, h: 0.65, color: COLORS.WHITE_PURE, fontSize: 10, align: "center", valign: "middle" });
  });

  // RIGHT ZONE: 3 Pillars Vertical Stack (x: 5.6, y: 1.35, w: 7.23, h: 5.70)
  render3PillarsBox(slide, 5.6, 1.35, 7.23, 5.70, pillars, "VERTICAL");
}

// ==============================================================================
// SLIDE GENERATION (ALL 26 EXECUTIVE SLIDES)
// ==============================================================================

// --- SLIDE 1: COVER PRESENTATION (Adaptive, Authentic & High-Impact) ---
let slide1 = pptx.addSlide();
slide1.background = { fill: COLORS.NAVY_DARK };

// Decorative Outer Border Frame
slide1.addShape(pptx.ShapeType.rect, {
  x: 0.3, y: 0.3, w: 12.73, h: 6.9,
  fill: { color: COLORS.NAVY_DARK },
  line: { color: COLORS.TEAL_NEON, width: 2 },
  rectRadius: 0.1
});

// Category Badge
slide1.addShape(pptx.ShapeType.rect, {
  x: 1.0, y: 1.0, w: 4.5, h: 0.45,
  fill: { color: COLORS.SLATE_CARD },
  line: { color: COLORS.TEAL_NEON, width: 1.5 },
  rectRadius: 0.06
});
slide1.addText("EXECUTIVE ENGINEERING PORTFOLIO", {
  x: 1.0, y: 1.0, w: 4.5, h: 0.45,
  color: COLORS.TEAL_NEON, fontSize: 13, bold: true, align: "center"
});

// Main Title
slide1.addText("PROJECT DEVELOPMENT PORTFOLIO", {
  x: 1.0, y: 1.65, w: 11.3, h: 1.1,
  color: COLORS.WHITE_PURE, fontSize: 34, bold: true, fontFace: "Segoe UI"
});

// Subtitle / Authentic Positioning Banner
slide1.addText("Senior Full-Stack Software Engineer & Lead Project Management / Business Analyst | Industry-Standard Adaptive Engineer with Practical AI Workflow & Hardware Integration Experience", {
  x: 1.0, y: 2.8, w: 11.3, h: 0.85,
  color: COLORS.TEAL_NEON, fontSize: 16, bold: true, fontFace: "Segoe UI"
});

// Presenter Box
slide1.addShape(pptx.ShapeType.rect, {
  x: 1.0, y: 3.9, w: 11.3, h: 2.8,
  fill: { color: COLORS.SLATE_CARD },
  line: { color: COLORS.BLUE_BORDER, width: 1.5 },
  rectRadius: 0.08
});

slide1.addText("MUHAMMAD HAIDAR SHAHAB", {
  x: 1.4, y: 4.15, w: 10.5, h: 0.5,
  color: COLORS.WHITE_PURE, fontSize: 24, bold: true
});

slide1.addText("Proven Engineering Execution: 100+ Enterprise Modules Consolidated | BUMN & Financial Insurance Gateways | R&D AI & Hardware IoT Interlocks", {
  x: 1.4, y: 4.7, w: 10.5, h: 0.45,
  color: COLORS.GOLD_AMBER, fontSize: 14, bold: true
});

slide1.addText([
  { text: "🌐 Live Portfolio: ", options: { color: COLORS.TEXT_MUTED, bold: true } },
  { text: "profile-muhammad-haidar-shahab.netlify.app\n", options: { color: COLORS.TEAL_NEON } },
  { text: "🏢 Enterprise Portals: ", options: { color: COLORS.TEXT_MUTED, bold: true } },
  { text: "hub-asum-dev.ifg-life.id | cisea.bukitasam.co.id | sydemy.com\n", options: { color: COLORS.EMERALD_GREEN } },
  { text: "📦 Repositories: ", options: { color: COLORS.TEXT_MUTED, bold: true } },
  { text: "github.com/haidar180202 | gitlab.com/haidar180202", options: { color: COLORS.WHITE_PURE } }
], {
  x: 1.4, y: 5.25, w: 10.5, h: 1.3, fontSize: 13
});


// --- SLIDE 2: EXECUTIVE SUMMARY & ENGINEERING FOOTPRINT ---
let slide2 = pptx.addSlide();
addSlideHeader(slide2, "EXECUTIVE SUMMARY", "ENGINEERING FOOTPRINT & TRACK RECORD", "Proven executive-level execution across BUMN giants, financial holding companies, and private R&D architectures.");

// Key Highlight Banner Top
slide2.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.45, w: 12.33, h: 0.8,
  fill: { color: COLORS.SLATE_CARD },
  line: { color: COLORS.GOLD_AMBER, width: 2 },
  rectRadius: 0.08
});
slide2.addText("🏆 CORE VALUE PROPOSITION: Bridging enterprise Full-Stack scalability with pragmatic, hands-on AI workflow automation and physical hardware IoT telemetry to deliver 100% reliable, production-grade systems.", {
  x: 0.7, y: 1.5, w: 11.9, h: 0.7,
  color: COLORS.WHITE_PURE, fontSize: 13, bold: true
});

// 3 Metric Cards Horizontal
const sumCards = [
  { title: "100+ BUSINESS MODULES", color: COLORS.TEAL_NEON, text: "Successfully consolidated over 100 fragmented HR, Mining, IT, and Travel modules into a single role-based Super-App (CISEA v2.0.0 at PT Bukit Asam Tbk)." },
  { title: "4+ ENTERPRISE GIANTS", color: COLORS.GOLD_AMBER, text: "Delivered mission-critical portals and architectural upgrades for PT Bukit Asam Tbk, PT Pupuk Sriwidjaja, IFG (Indonesia Financial Group), and PT Investree." },
  { title: "FULL-SPECTRUM ADAPTABILITY", color: COLORS.EMERALD_GREEN, text: "Rare technical versatility spanning physical Raspberry Pi / PLC hardware interlocks, MERN/Laravel backends, and Visual AI Node DAG Orchestration." }
];
sumCards.forEach((c, idx) => {
  const cx = 0.5 + idx * 4.18;
  slide2.addShape(pptx.ShapeType.rect, {
    x: cx, y: 2.45, w: 3.98, h: 4.5,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: c.color, width: 2 },
    rectRadius: 0.08
  });
  slide2.addText(c.title, { x: cx + 0.2, y: 2.65, w: 3.58, h: 0.5, color: c.color, fontSize: 16, bold: true });
  slide2.addText(c.text, { x: cx + 0.2, y: 3.3, w: 3.58, h: 3.4, color: COLORS.WHITE_PURE, fontSize: 13 });
});


// --- SLIDE 3: PT BUKIT ASAM TBK — CISEA FACELIFT SUPER APP (Archetype A Dashboard Split) ---
let slide3 = pptx.addSlide();
renderArchetypeA(
  slide3,
  "ENTERPRISE SUPER-APP • PT BUKIT ASAM TBK",
  "CISEA FACELIFT WEB APP v2.0.0 (http://cisea.bukitasam.co.id/)",
  "Consolidating 100+ internal business functions into one unified enterprise portal (Sept 2024 - Sept 2025)",
  "CISEA v2.0.0 Gateway (cisea.bukitasam.co.id)",
  "100+ Modules Integrated in 1 Single Portal",
  [
    { label: "Active Personnel", val: "14,250+ Users" },
    { label: "RBAC Security Level", val: "Role-Based A+" },
    { label: "Attendance Audit", val: "100% Accurate" },
    { label: "System Uptime SLA", val: "99.9% Monitored" }
  ],
  ["🏢 Executive Portal", "👥 Master Employee HR", "⏱️ Biometric Attendance", "📑 Self-Service IT SLA", "🔒 Audit & Compliance", "📊 Director BI Dashboard"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Consolidated & streamlined over 100 distinct internal business functions at PT Bukit Asam Tbk into one single digital portal.",
        "Created a unified interface serving thousands of employees, contractors, clients, and business partners.",
        "Eliminated legacy data silos across Human Resources, IT Support, Asset Tracking, and Mining Operations."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Master Employee System: Real-time employee data management with secure role-based access controls (RBAC).",
        "Multi-tier Attendance: Biometric integration & precise geolocation verification for permanent employees and contractors.",
        "End-to-End HR: Recruitment, onboarding, performance evaluation, and automated payroll processing integration."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "100% elimination of attendance falsification via multi-factor geolocation and biometric verification.",
        "Streamlined corporate governance with real-time audit trails and SLA-monitored self-service IT portals.",
        "Responsive cross-platform compatibility supporting desktop, tablet, and mobile access seamlessly across mining sites."
      ]
    }
  ]
);


// --- SLIDE 4: PT BUKIT ASAM TBK — CISEA MINING OPERATIONS & ARCHITECTURE (Archetype B Pipeline) ---
let slide4 = pptx.addSlide();
renderArchetypeB(
  slide4,
  "MICROFRONTEND ARCHITECTURE • PT BUKIT ASAM TBK",
  "CISEA MINING OPERATIONS & ARCHITECTURE (cisea.bukitasam.co.id)",
  "Zero-regression domain decoupling utilizing Turbo/Nx microfrontends with high-speed Redis real-time caching.",
  "Decoupling 100+ Module Monolith (http://cisea.bukitasam.co.id/)",
  [
    "Domain Decoupling:\nTurbo & Nx Monorepo",
    "Frontend Slicing:\nReact + TypeScript",
    "Core API Gateway:\nExpress.js + Sequelize",
    "Cache & Storage:\nRedis + MinIO S3",
    "CI/CD Pipeline:\nGitLab + Docker + Jest"
  ],
  ["React.js", "TypeScript", "Node/Express", "Sequelize ORM", "Redis Cache", "MinIO S3", "Docker CI/CD", "Jest QA Suite"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Mining Operations Monitoring: Real-time dashboard tracking mining activities, heavy equipment status, and safety compliance.",
        "Travel Management System: End-to-end business trip authorization, booking, tracking, and automated expense reconciliation.",
        "Business Intelligence (BI): Consolidated reporting & customizable KPI dashboards across all directorate units."
      ]
    },
    {
      title: "⚙️ ARSITEKTUR TEKNIS (Output)",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Microfrontend Architecture utilizing Turbo & Nx to decouple the massive 100+ module monolithic application into independent apps.",
        "Frontend: React, TypeScript, Bootstrap, high-speed modular slicing.",
        "Backend & DB: Node.js, Express.js, Sequelize ORM, MySQL, MongoDB, Redis caching, MinIO Object Storage, Sentry tracing, and Docker."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Automated CI/CD Pipeline Setup (GitLab CI/CD) and full Integration Testing suite using Jest ensuring zero regression across 100+ modules.",
        "Drastic improvement in system response time and throughput handled by Redis caching and modular loading.",
        "High-availability architecture maintaining 99.9% uptime across production mining sites."
      ]
    }
  ]
);


// --- SLIDE 5: IFG (INDONESIA FINANCIAL GROUP) — EPIC PORTAL (Archetype A Dashboard Split) ---
let slide5 = pptx.addSlide();
renderArchetypeA(
  slide5,
  "FINANCIAL HOLDING GATEWAY • IFG (BUMN HOLDING)",
  "EPIC PORTAL — DIGITAL INSURANCE ENTERPRISE PLATFORM (hub-asum-dev.ifg-life.id)",
  "Engineering high-concurrency insurance workflows and policy portals with banking-grade security (https://hub-asum-dev.ifg-life.id/).",
  "IFG Epic Portal — Financial Holding Dashboard",
  "Centralized Policy & Claim Gateway (hub-asum-dev.ifg-life.id)",
  [
    { label: "Policy Processing", val: "3x Faster SLA" },
    { label: "Security Standard", val: "Banking Grade-A" },
    { label: "Tenant Architecture", val: "Multi-Subsidiary" },
    { label: "Data Lookups", val: "Real-Time REST" }
  ],
  ["☕ Java Quarkus Backend", "⚡ BPMN Workflow Engine", "🏢 IFG Life Hub Portal", "📑 Policy Workflow", "🔐 Multi-Tenant RBAC", "🌐 Next.js & Redux"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Currently handling & engineering the digital insurance enterprise platform (Corporate LifeHub / Epic Portal) for Indonesia Financial Group Life (https://hub-asum-dev.ifg-life.id/).",
        "Centralized gateway serving insurance policy workflows, customer claims, and multi-tenant portal management across IFG Life subsidiaries.",
        "Deep integration with BPMN (Business Process Model and Notation) Workflow Integration for automated policy underwriting approval chains."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Architected with robust role-based access control (RBAC) ensuring strict data segregation across insurance entities.",
        "Backend microservices built on Java Quarkus (Supersonic Subatomic Cloud-Native Java) ensuring high throughput and minimal memory footprints.",
        "Full tech stack: Next.js, Tailwind CSS, Redux Toolkit, Java Quarkus, BPMN Workflow, PostgreSQL, and OIDC/OAuth2."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Accelerated policy service turnaround time and unified digital customer engagement across IFG's network.",
        "Strict adherence to financial regulatory compliance and banking-grade cybersecurity standards.",
        "Provides executive management with real-time analytics on policy issuance and claim metrics."
      ]
    }
  ]
);


// --- SLIDE 6: PT PUPUK SRIWIDJAJA PALEMBANG — HCMS WEB APP (Archetype A Dashboard Split) ---
let slide6 = pptx.addSlide();
renderArchetypeA(
  slide6,
  "HUMAN CAPITAL MANAGEMENT • PT PUPUK SRIWIDJAJA",
  "HCMS WEB APP — TALENT & COMPETENCY SYSTEM",
  "Schema-driven architecture centralizing talent management, competency dictionaries, and mental health EAP.",
  "Pupuk Sriwidjaja HCMS Portal",
  "Integrated Competency & Talent Management System",
  [
    { label: "Competency Mapping", val: "Soft & Hard Skill" },
    { label: "Mental Health EAP", val: "100% Confidential" },
    { label: "Database Schema", val: "ERD Relational" },
    { label: "Promotion Velocity", val: "Objective Scoring" }
  ],
  ["👥 Master Employee", "📚 Kamus Kompetensi", "🌱 Mental Health EAP", "🎯 Career Path Plan", "🔄 Mutation Engine", "📑 CI/CD GitLab"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Centralizes human capital management processes across PT Pupuk Sriwidjaja Palembang.",
        "Encompasses master employee data integration, education/training tracking, individual performance monitoring, and career path planning.",
        "Manages organizational structuring, position alignment, and employee mobility (mutations)."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Integrated Competency Dictionary (Kamus Kompetensi Soft & Hard Skills) mapping employee capabilities to job roles.",
        "Pioneered an integrated Employee Assistance Program (EAP) for confidential mental health consultation services.",
        "Tech Stack: PHP, Laravel, jQuery/AJAX, MySQL, PostgreSQL, Bootstrap, and GitLab CI/CD with strict ERD schema modeling."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Promoted a holistic approach combining organizational productivity with workforce mental well-being.",
        "Accelerated HR promotion and mutation decisions with objective competency evaluation scores.",
        "Eliminated paperwork bottlenecks with neat, orderly, production-ready code performance."
      ]
    }
  ]
);


// --- SLIDE 7: PT PUPUK SRIWIDJAJA PALEMBANG — TKNO WEB APP (Archetype A Dashboard Split) ---
let slide7 = pptx.addSlide();
renderArchetypeA(
  slide7,
  "WORKFORCE GOVERNANCE • PT PUPUK SRIWIDJAJA",
  "TKNO WEB APP — OUTSOURCED WORKFORCE SYSTEM",
  "Real-time organizational hierarchy tracking and contract governance across regional plant directorates.",
  "TKNO Outsourced Workforce Dashboard",
  "Real-Time Hierarchy & Contract Tracking Engine",
  [
    { label: "Workforce Structure", val: "3 Directorates" },
    { label: "Contract Renewal", val: "100% Tracked" },
    { label: "Duplicate Data", val: "0% (Eliminated)" },
    { label: "Labor Compliance", val: "SOP Aligned" }
  ],
  ["🏢 Directorate Hub", "📋 Contract Master", "📊 Hierarchy Tree", "💰 Budget Alignment", "👥 Plant Demographics", "⚡ Realtime Query"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Integrated enterprise platform developed specifically to centralize and streamline contract & non-organic employee management.",
        "Accurately records employee positions, organizational hierarchy across Directorates, and master contract data.",
        "Serves as a reliable single-source-of-truth for HR decision-making and regulatory compliance."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Real-time visibility into workforce structure across Directorate Utama, Operations & Production, and Finance & General.",
        "Supports succession planning and ensures precise alignment between non-organic job roles and company budget structures.",
        "Tech Stack: PHP, Laravel, jQuery, MySQL, PostgreSQL, Bootstrap, clean schema relational design."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Eliminated duplicate and untracked outsourced employee data across regional plant units.",
        "Seamless payroll integration ensuring timely contract renewals and compliance with Indonesian labor regulations.",
        "Empowered management with instant demographic and deployment reporting across all processing facilities."
      ]
    }
  ]
);


// --- SLIDE 8: PT INVESTREE RADHIKA JAYA — INTERNSHIP MONITORING WEB APP (Archetype A Dashboard Split) ---
let slide8 = pptx.addSlide();
renderArchetypeA(
  slide8,
  "FINTECH ENTERPRISE HR SYSTEM • PT INVESTREE RADHIKA JAYA",
  "STUDENT INTERN DAILY ACTIVITY & MILESTONE MONITORING APP",
  "Interactive daily activity tracking, shift logs, and departmental supervisor KPI evaluation engine (Fintech Enterprise).",
  "Investree Internship Monitoring Dashboard",
  "Daily Activity Tracker & Milestone Rubric Engine",
  [
    { label: "Evaluation Rubric", val: "Real-Time AJAX" },
    { label: "Tech Stack Tracking", val: "Multi-Department" },
    { label: "Company Category", val: "Fintech Enterprise" },
    { label: "Team Collaboration", val: "3-Engineer Agile" }
  ],
  ["🏢 Fintech Enterprise HR", "📖 Digital Handbook", "📊 Daily Shift Logs", "💬 Supervisor KPI Review", "🎯 Grading Rubric", "⚡ Reload-Free UI"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Comprehensive student intern monitoring application engineered specifically for PT Investree Radhika Jaya (Financial Technology Enterprise).",
        "Tracks daily intern activities, shift logs, documents technical challenges faced, and logs project deliverables across departments.",
        "Provides departmental supervisors with structured KPI tracking to evaluate intern milestones without paperwork delays."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Built-in evaluation engine enabling continuous feedback between interns and supervisors with clear grading rubrics.",
        "ERD database schema tracking individual growth opportunities and technology stack utilization across departments.",
        "Tech Stack: PHP, Laravel, jQuery, MySQL, PostgreSQL, Bootstrap (Developed in a collaborative 3-engineer team)."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Enhanced transparency and communication between interns and supervisors, reducing onboarding friction.",
        "Provided Investree's HR with structured evaluation data to identify top-performing interns for permanent hire.",
        "Delivered production-ready clean front-end code utilizing AJAX for smooth, reload-free evaluations."
      ]
    }
  ]
);


// --- SLIDE 9: SUPREME MOTHER ORCHESTRATOR V1.0 (FIXED) — PRIVATE AI R&D (Archetype B Pipeline) ---
let slide9 = pptx.addSlide();
renderArchetypeB(
  slide9,
  "PRIVATE AI R&D • VISUAL DAG ENGINE",
  "SUPREME MOTHER ORCHESTRATOR V1.0 (FIXED)",
  "Dynamic natural language command to AI model generation pipeline with visual graph execution chain.",
  "Supreme Mother Orchestrator — DAG Chaining & Rendering Engine",
  [
    "Natural Language\nComment Parser",
    "Visual DAG Graph\nChaining Engine",
    "Scene Splitter &\nClip Cache Cache",
    "Dynamic AI Model\nParameter Tuning",
    "Merge Video &\nTelegram API Sync"
  ],
  ["Python 3.11", "FastAPI Backend", "Visual Node Canvas", "Async Cluster Render", "Telegram Alert Hooks", "Model Tuning API"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Proprietary node-based visual workflow orchestrator built to model, chain, and execute complex generative AI pipelines.",
        "Enables users to visually connect modular nodes for multi-stage video generation, image synthesis, and scene splitting.",
        "Engineered with a visual graph editor that executes tasks asynchronously across backend rendering clusters."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Custom Model Generation: Dynamically generates and tunes new AI model parameters based on natural language comments ('automatically generating new models based on custom user prompts').",
        "Node Execution Chain: Init Clip Cache -> Supreme Mother Orchestrator -> Extract Data -> Split Scenes -> Generate Image/Motion -> Check Style -> Loop Over Scenes -> Merge -> Video Upload.",
        "Tech Stack: Python, FastAPI backend, RESTful LLM/Image APIs, Telegram Message alert hooks, and custom node canvas."
      ]
    },
    {
      title: "🚀 MEASURABLE R&D IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Eliminated manual script-to-video rendering bottlenecks by automating scene extraction and clip merging completely.",
        "Demonstrates elite-level engineering capabilities in AI system architecture, graph theory execution, and API pipeline design.",
        "Currently undergoing continuous R&D expansion to support advanced generative video models."
      ]
    }
  ]
);


// --- SLIDE 10: AI AUTOMATION YOUTUBE ENGINE — PRIVATE REPOSITORY (Archetype B Pipeline) ---
let slide10 = pptx.addSlide();
renderArchetypeB(
  slide10,
  "PRIVATE REPOSITORY • AUTONOMOUS AI PIPELINE",
  "AI AUTOMATION YOUTUBE ENGINE",
  "24/7 autonomous content synthesis: LLM Prompt -> Audio TTS -> FFmpeg Video Engine -> YouTube API v3.",
  "Autonomous YouTube Media Generation & Publishing Pipeline",
  [
    "LLM Prompt & Script\nSynthesis Engine",
    "Audio TTS High-Fidelity\nSpeech Generation",
    "Python FFmpeg Video\n& Visual Clip Align",
    "SEO Metadata &\nThumbnail Injection",
    "YouTube Data API v3\nAuto-Schedule Upload"
  ],
  ["Python 3.11", "FFmpeg Engine", "YouTube Data API v3", "OAuth2 Auth", "Cron Autonomous Loop", "SEO Optimization"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Engineered a fully autonomous backend pipeline capable of conceptualizing, generating, formatting, and publishing YouTube videos.",
        "Removes all manual human intervention across the content creation lifecycle.",
        "Designed for scalable digital asset generation and programmatic media channel management."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Script & Prompt Synthesis: LLM integration generating engaging scripts, titles, and SEO-optimized video descriptions.",
        "Audio & Visual Alignment: High-fidelity Text-to-Speech (TTS) audio synthesis combined with Python/FFmpeg video processing to align dynamic visual clips with narration timing.",
        "Auto-Publishing Engine: Direct integration with YouTube Data API v3 for scheduled uploads, custom thumbnail setting, and tag injection."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Achieved continuous, autonomous video publishing with zero manual video editing or rendering overhead.",
        "Proves mastery over complex multi-step Python automation, media processing libraries (FFmpeg), and OAuth2 external APIs.",
        "Creates a highly scalable framework for automated digital content monetization and distribution."
      ]
    }
  ]
);


// --- SLIDE 11: SYSTEM CONTROLLER SIMULATOR RASPBERRY PI (Archetype C Hardware Schematics Grid) ---
let slide11 = pptx.addSlide();
renderArchetypeC(
  slide11,
  "HARDWARE-TO-CLOUD IOT • RASPBERRY PI INTERLOCK",
  "SYSTEM CONTROLLER SIMULATOR RASPBERRY PI",
  "Bridging physical GPIO electrical circuits with remote Railway Cloud REST APIs for industrial commissioning.",
  [
    "Raspberry Pi GPIO Pins [0-40] Logic Control",
    "Relay Wiring & Safety Interlock Simulation",
    "Secondary Microcontroller UART/SPI Interface",
    "Electrical Power Supply Simulation [24V DC]"
  ],
  [
    "Railway Cloud REST API Data Endpoints",
    "Realtime Remote Telemetry Stream & Logging",
    "Web-Based System Controller Dashboard UI",
    "50% Field Commissioning Time Reduction SLA"
  ],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Integrated hardware-software simulation platform modeling and testing industrial automation architectures using Raspberry Pi.",
        "Serves as a comprehensive development and training testbed for configuring control logic and validating industrial wiring setups.",
        "Bridges physical electrical control circuits with modern web-based telemetry systems."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Industrial I/O Simulation: Validates digital/analog Input/Output setups, relay wiring, and new device power supply simulations.",
        "Microcontroller Interface: Custom Python logic controlling Raspberry Pi GPIO pins communicating with secondary IoT microcontrollers.",
        "Cloud API Integration: RESTful API-driven data exchange interfacing with external systems and Railway endpoints hosting public datasets for real-time remote monitoring."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Enables engineers to design, stress-test, and optimize control architectures before physical factory deployment.",
        "Reduced field commissioning time by 50% and eliminated wiring/logic safety hazards during hardware installation.",
        "Invaluable training platform for technicians validating safety interlocks in a controlled lab environment."
      ]
    }
  ]
);


// --- SLIDE 12: PT PUPUK SRIWIDJAJA — DIFFERENTIAL PRESSURE PROTECTION SYSTEM (Archetype C Hardware Schematics Grid) ---
let slide12 = pptx.addSlide();
renderArchetypeC(
  slide12,
  "INDUSTRIAL INSTRUMENTATION • PT PUPUK SRIWIDJAJA",
  "DIFFERENTIAL PRESSURE PROTECTION SYSTEM (ΔP)",
  "Automated PLC & HMI emergency interlock systems preventing critical chemical plant equipment damage.",
  [
    "High-Precision ΔP Sensor Instrumentation Loop",
    "Chemical Filter & Piping Pressure Monitoring",
    "Programmable Logic Controller (PLC) Wiring",
    "Pressure Calibrator & Multimeter Schematics"
  ],
  [
    "Human-Machine Interface (HMI) Real-Time Alerts",
    "Automated Emergency Shutdown Sequence (ESD)",
    "100% Prevention of Critical Equipment Damage",
    "Strict Compliance with Industrial Safety SOPs"
  ],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Analyzed and maintained differential pressure (ΔP) instrumentation within industrial protection circuits in chemical processing units.",
        "Monitored critical flow conditions, fluid levels, and structural integrity across heavy industrial filters and piping networks.",
        "Directly impacted operational plant safety and chemical processing reliability at PT Pupuk Sriwidjaja."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Anomaly Detection Loop: High-precision ΔP sensors detecting abnormal conditions such as pipeline blockages, fluid leaks, or sharp pressure drops.",
        "Automated Protection Mechanisms: Sensor triggers wired to Programmable Logic Controllers (PLC) and Human-Machine Interfaces (HMI) to initiate immediate emergency shutdown sequences.",
        "Tools & Maintenance: Pressure Calibrators, Multimeters, Wiring Schematics analysis, and adherence to strict Industrial SOPs."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "100% prevention of critical equipment damage and hazardous chemical overpressure situations during operational tenure.",
        "Demonstrated hands-on engineering capability bridging industrial electrical schematics with high-level software monitoring.",
        "Deepened institutional knowledge of preventive maintenance and repair loops in heavy chemical manufacturing."
      ]
    }
  ]
);


// --- SLIDE 13: iSMART EDUCATION CENTER — LEARNING & ATTENDANCE WEB APP (Archetype A Dashboard Split) ---
let slide13 = pptx.addSlide();
renderArchetypeA(
  slide13,
  "EDTECH PLATFORM • MERN STACK & D3.JS",
  "iSMART EDUCATION CENTER WEB APP",
  "Interactive video/audio gamified lessons + D3.js interactive data visualizations + custom MERN CMS.",
  "iSmart Education Gamified Learning Portal",
  "Interactive Student Curriculum & Attendance Engine",
  [
    { label: "Gamified Structure", val: "Duolingo-Style" },
    { label: "Data Visualization", val: "D3.js Interactive" },
    { label: "Backend Architecture", val: "MERN + MySQL" },
    { label: "Attendance Engine", val: "Staff & Student" }
  ],
  ["🎓 Bite-Sized Lessons", "📊 D3.js Charts", "📹 Audio/Video Stream", "📋 Employee Attendance", "👥 Student Path", "📑 Redux Store"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Comprehensive digital education platform engineered to streamline student learning, class scheduling, and employee attendance.",
        "Inspired by user-friendly, gamified edtech models like Duolingo, offering bite-sized interactive lessons.",
        "Combines student curriculum paths with internal employee attendance tracking in one portal."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Built from scratch using MERN Stack (Node.js, Express.js, React.js, MongoDB) and relational MySQL databases.",
        "Frontend: Responsive UI built with React, Redux state management, and Bootstrap styling.",
        "Interactive Analytics: Combined D3.js data visualization library with React components to render dynamic student progression charts and automated feedback loops."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Bite-sized, gamified lesson structure significantly boosted student completion rates and self-paced retention.",
        "Empowered educators and parents with real-time visual progress dashboards accessible across all mobile and desktop devices.",
        "Streamlined internal employee attendance and class scheduling, eliminating manual administrative paperwork."
      ]
    }
  ]
);


// --- SLIDE 14: LEARN QURAN TAFSIR APP (Archetype D Dual Mobile Frame) ---
let slide14 = pptx.addSlide();
renderArchetypeD(
  slide14,
  "MOBILE-FIRST WEB APPLICATION • REACT CONTEXT",
  "LEARN QURAN TAFSIR & TADABUR APP",
  "Zero-lag React Context accordions (Accordion 1, 2, 3) and instant keyword exploration UI inspired by Google.",
  "Main Search & Topic Navigation",
  [
    "Instant Search Bar (Keyword Engine)",
    "Structured Topic Dropdown Selects",
    "Minimalist Google-Style Interface",
    "Bottom Bar: Beranda, Topik, Tadabur"
  ],
  "Accordion & Tafsir Reader State",
  [
    "Zero-Lag Accordion 1, 2, 3 (Context)",
    "List.Accordion Wrapped via Context",
    "Smooth Collapsible Verse Navigation",
    "Zero Memory Leaks on Heavy Text"
  ],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Designed as a clean, highly responsive digital search and study application inspired by Google's minimalist interface.",
        "Provides instant keyword exploration across Al-Qur'an verses and comprehensive Tafsir commentaries.",
        "Optimized specifically for seamless reading and topic discovery on mobile devices."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "State Management: Utilizes React Context API to power dynamic, collapsible accordion lists (List.Accordion wrapped via React.Context).",
        "Navigation Architecture: Features an instant search bar (Search), structured topic dropdowns (Select item), and a dedicated mobile bottom bar (Beranda, Topik, Tadabur, Bookmark, Pengaturan).",
        "Tech Stack: React, Context API, responsive CSS3 grid/flexbox layouts."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Delivered an ultra-smooth, zero-lag reading experience enabling users to study Tafsir without page reloads.",
        "Demonstrated exceptional skill in crafting intuitive, accessible mobile UI/UX layouts for broad public consumption.",
        "Structured state management prevented memory leaks during heavy scripture and commentary data rendering."
      ]
    }
  ]
);


// --- SLIDE 15: SYIHAB LEARNING COURSE PLATFORM (Archetype A Dashboard Split) ---
let slide15 = pptx.addSlide();
renderArchetypeA(
  slide15,
  "ONLINE BOOTCAMP & COURSE PLATFORM • FIREBASE",
  "SYIHAB LEARNING COURSE PLATFORM",
  "React, Redux & Firebase real-time architecture supporting scalable digital cohorts and interactive mentorship.",
  "Syihab Learning Bootcamp Dashboard",
  "Real-Time Course Progression & Cohort Engine",
  [
    { label: "Core Philosophy", val: "Any Time Upgrade" },
    { label: "State Management", val: "Redux Predictable" },
    { label: "Database Sync", val: "Firebase Real-Time" },
    { label: "UI Brand Theme", val: "Vibrant Green Tech" }
  ],
  ["🌱 Learn Anywhere", "💼 Find Your Job", "💰 Manage Money", "👨‍🏫 Great Mentors", "🎯 Live Events", "⚡ Instant Auth Sync"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Online course and bootcamp education platform enabling professionals and students to upskill anytime ('Any Time Give Your Time To Your Life With Upgrade Your skill').",
        "Structured around clear educational pathways with dedicated mentorship and interactive promo events.",
        "Designed to democratize technical training across remote student communities."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Core Modules: Features distinct learning tracks (Can Be Learn From Anywhere, Can Be Find Your Job, Can Be Manage Your Money, Learn With Great Mentor).",
        "Tech Stack: Frontend built using React.js and Redux for predictable state management across course modules.",
        "Backend & DB: Firebase real-time database and authentication ensuring instant progress synchronization across devices."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Provides a clean, highly engaging user interface with vibrant green modern branding encouraging course enrollment.",
        "Scalable cloud-native architecture ready to support thousands of concurrent students during live bootcamp sessions.",
        "Establishes a solid portfolio demonstration of Firebase real-time synchronization combined with React DOM efficiency."
      ]
    }
  ]
);


// --- SLIDE 16: RECRUITMENT & COMPANY SIMULATION WEB APPS (Archetype A Dashboard Split) ---
let slide16 = pptx.addSlide();
renderArchetypeA(
  slide16,
  "CORPORATE SIMULATION & RECRUITMENT PORTALS",
  "RECRUITMENT & COMPANY SIMULATION WEB APPS",
  "Scenario-based virtual interview scoring engine + multi-role corporate management simulation.",
  "Virtual Corporate & Hiring Simulation Gateway",
  "Scenario-Based Interview & Multi-Role Governance",
  [
    { label: "Interview Engine", val: "Automated Rubric" },
    { label: "Leadership Roles", val: "Manager / Finance" },
    { label: "UI Frameworks", val: "Tailwind / Chakra UI" },
    { label: "Database Layer", val: "MySQL & MongoDB" }
  ],
  ["👔 Profile Setup", "📝 Resume Submission", "🎯 Virtual Interview", "📊 Financial Health", "💼 Marketing Lead", "🌿 Git Version Flow"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Recruitment Simulation App: Simulates real-world hiring pipelines (profile setup, resume submission, online assessments, virtual interviews) for student career preparation.",
        "Company Simulation App: Interactive virtual corporate management platform allowing students to assume high-stakes leadership roles (Manager, Finance Officer, Marketing Lead).",
        "Bridges theoretical academic concepts with practical corporate workflows."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Recruitment Features: Automated feedback and scoring rubrics evaluating student responses in scenario-based virtual interviews.",
        "Company Features: Real-time performance dashboards tracking virtual company financial health, role delegation, and market simulation responses.",
        "Tech Stack: PHP, Laravel, Node.js, Express.js, React, Tailwind CSS, Chakra UI, Material UI, MySQL, and MongoDB."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Proven educational impact helping university students master professional readiness and corporate operational governance.",
        "Demonstrated ability to build complex simulation logic and multi-role state dashboards with attractive modern UI frameworks.",
        "Delivered production-grade code with full Git version control collaboration across multidisciplinary teams."
      ]
    }
  ]
);


// --- SLIDE 17: STARTUP SIMULATOR & MOBILE APP CHAT (Archetype D Dual Mobile Frame) ---
let slide17 = pptx.addSlide();
renderArchetypeD(
  slide17,
  "MOBILE APPLICATION & STARTUP SIMULATION",
  "STARTUP SIMULATOR & WHATSAPP-STYLE MOBILE CHAT",
  "Gamified Series A funding valuation tracker + email-based identity backend mobile chat system (React Native).",
  "Gamified Startup Milestone Engine",
  [
    "Ideation to Seed & Series A Funding",
    "MVP Creation & Customer Acquisition Flow",
    "Gamified Business Valuation Tracker",
    "Real-Time Financial Analytics Dashboard"
  ],
  "WhatsApp-Inspired Mobile Chat UI",
  [
    "Email-Based Identity Backend Synchronization",
    "Real-Time Conversation Threading & Swipe UI",
    "Instant Multi-Device Read Receipts Sync",
    "React Native + Firebase + Laravel Express API"
  ],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Startup Simulation App: Guides learners through the entrepreneurial lifecycle from ideation and seed/Series A funding to MVP creation and customer acquisition.",
        "Mobile App Chat: WhatsApp-inspired instant text and voice messaging application built specifically for seamless, secure communication across mobile devices.",
        "Covers both gamified business analytics and real-time mobile networking."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Email-Based Identity Backend: Instead of phone numbers, user chat identities are linked to email addresses, enabling secure multi-device synchronization without SIM dependency.",
        "Chat Features: Real-time conversation threading, instant read receipts, voice message handling, and clean swipe navigation.",
        "Tech Stack: React Native, React Navigation, Firebase real-time database, PHP (Laravel), and Express.js."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Successfully demonstrated core engineering principles of low-latency mobile messaging and real-time data synchronization.",
        "Provided business educators with a gamified milestone tracker allowing students to visualize startup valuation outcomes.",
        "Exhibited strong mobile UI/UX design competency with smooth gesture animations and responsive layout scaling."
      ]
    }
  ]
);


// --- SLIDE 18: CLIENT SOLUTIONS — KREATIFISION & HYPERHIRE (Archetype A Dashboard Split) ---
let slide18 = pptx.addSlide();
renderArchetypeA(
  slide18,
  "CLIENT LANDING & TECH RECRUITMENT PORTALS",
  "CLIENT SOLUTIONS: KREATIFISION & HYPERHIRE",
  "High-conversion agency landing portal + international tech candidate screening dashboard (Korean & Global Clients).",
  "Kreatifision Agency & Hyperhire Tech Portal",
  "High-Impact Conversion & Global Tech Screening",
  [
    { label: "Inquiry Conversion", val: "+45% Lead Boost" },
    { label: "Global Candidates", val: "Abhishek, Jane Doe" },
    { label: "Screening Engine", val: "Hourly Rate Matrix" },
    { label: "Tech Stack", val: "Laravel / React" }
  ],
  ["🚀 Kreatifision Hero", "💬 Consultation Flow", "👨‍💻 Developer Roster", "⚡ Rate Calculator", "🌍 Multi-Lingual UI", "📑 REST Lead Capture"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Kreatifision ('Siap transformasi ke digital?'): Professional digital agency landing platform showcasing corporate services, portfolio, and direct discussion booking.",
        "Hyperhire (Tech Talent Portal): International tech hiring platform connecting global companies with vetted foreign software developers ('Abhishek Gupta, Jane Doe, John Smith').",
        "Engineered specifically to maximize user engagement and business inquiry conversions."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Kreatifision UI: Clean, high-impact hero headers, service grids, and integrated contact/consultation scheduling workflows.",
        "Hyperhire UI: Multi-lingual candidate discovery dashboard featuring structured developer cards (5 yrs experience, Frontend Developer, Project Manager), hourly rate calculators, and skill filtering.",
        "Tech Stack: PHP, Laravel, React, modern CSS3 styling, and REST API lead capture endpoints."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Delivered international-grade UI/UX aesthetics meeting the rigorous standards of Korean and global tech recruitment clients.",
        "Significantly increased consultation inquiry rates for Kreatifision with streamlined, call-to-action driven page layouts.",
        "Demonstrated ability to translate complex client business goals into polished, responsive production code."
      ]
    }
  ]
);


// --- SLIDE 19: FULLSTACK APPLICATIONS — HAIDAR SHOP & POKEMON APP (Archetype D Dual Frame) ---
let slide19 = pptx.addSlide();
renderArchetypeD(
  slide19,
  "FULLSTACK E-COMMERCE & API SIMULATION",
  "FULLSTACK APPS: HAIDAR SHOP & CAPTURE POKEMON",
  "Zero state desynchronization via Redux state store & React Context API hooks (Tokopedia Web Engineer Assignment).",
  "Haidar Shop — Redux E-Commerce",
  [
    "Dynamic Cart Additions & Badge Sync (Cart 0)",
    "Product Catalog Filtering (New Season Arrivals)",
    "Centralized Redux State Management Store",
    "Simulated Checkout & User Login Flow"
  ],
  "Capture Pokemon — Tokopedia Project",
  [
    "Live PokeAPI RESTful Endpoint Integration",
    "Welcome to Pokemon-Tokped & Pokemon List",
    "My Pokemon Caught Roster State Tracking",
    "React Context & Redux Zero-Desync Architecture"
  ],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Haidar Shop: Full-featured e-commerce catalog simulation (NEW SEASON ARRIVALS) built to demonstrate complex shopping cart and product filtering mechanics.",
        "Capture Pokemon App: Interactive Pokemon capture simulator developed specifically for a Tokopedia Web Platform Engineer project assignment utilizing external PokeAPI endpoints.",
        "Highlights front-end state architecture under heavy asynchronous API requests."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Haidar Shop Engine: Centralized Redux state management handling product listing, dynamic cart additions (Cart(0)), user login state, and mock checkout workflows.",
        "Capture Pokemon Engine: Consumes live PokeAPI REST data, utilizing React Context & Redux to track caught Pokemon (Welcome to Pokemon-Tokped, Pokemon List, My Pokemon).",
        "Tech Stack: React, Redux, Context API, Axios, CSS3 Flexbox/Grid."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Achieved 100% predictable state updates without data desynchronization during rapid user clicking and API polling.",
        "Proved readiness for high-standard corporate engineering roles (e.g. Tokopedia) with clean component modularity.",
        "Delivered highly engaging, visually polished UI interfaces that transform raw JSON data into delightful experiences."
      ]
    }
  ]
);


// --- SLIDE 20: FRONT-END SPA — CRUD NOTEAPP & IMDB MOVIE EXPLORER (Archetype D Dual Frame) ---
let slide20 = pptx.addSlide();
renderArchetypeD(
  slide20,
  "SINGLE-PAGE APPLICATIONS (SPA) • REACT HOOKS",
  "CRUD NOTEAPP REACT & IMDB MOVIE EXPLORER",
  "Instantaneous DOM filtering + TMDB Movie REST API integration (Black Panther: Wakanda Forever - 7.3 Star).",
  "CRUD NoteApp React — Personal SPA",
  [
    "Create a Note & Active Notes Management",
    "Instantaneous Title & Content DOM Filtering",
    "Zero-Reload CRUD Operations on Dummy Data",
    "Sleek Dark-Themed Daily Productivity UI"
  ],
  "IMDB Movie Explorer — TMDB REST API",
  [
    "Live TMDB REST API Endpoint Integration",
    "Popular, Top Rated & Upcoming Cinema Browsing",
    "High-Res Movie Banners & Film Synopses",
    "React Hooks (useState, useEffect) + Axios Engine"
  ],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "CRUD NoteApp React: Sleek, dark-themed daily note management application ('Create a note, Active Notes') built for fast personal productivity and idea organization.",
        "IMDB Movie App: Dynamic movie discovery web application browsing global cinema titles ('Popular, Top Rated, Upcoming') with detailed film synopses and ratings.",
        "Demonstrates mastery of fast React SPA routing and DOM updates."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "NoteApp Engine: Implements full Create, Read, Update, Delete (CRUD) operations on dummy data structures with instantaneous title and content search filtering without page reloads.",
        "IMDB Engine: Integrates the live TMDB (The Movie Database) REST API to fetch high-resolution movie banners ('Black Panther: Wakanda Forever - 7.3 Star'), trailers, and cast details.",
        "Tech Stack: React.js, Hooks (useState, useEffect), Axios, and responsive CSS3."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Delivered zero-latency search filtering with optimized React re-rendering and clean functional component structure.",
        "Showcased rich, cinematic visual styling with dark-mode elegance and seamless API error handling.",
        "Provides a rock-solid foundation for scalable single-page dashboard development."
      ]
    }
  ]
);


// --- SLIDE 21: SYNAPSE ACADEMY & UNIVERSITAS SJAKHYAKIRTI (Archetype A Dashboard Split) ---
let slide21 = pptx.addSlide();
renderArchetypeA(
  slide21,
  "ACADEMIC PORTALS & IT LEADERSHIP MENTORSHIP",
  "SYNAPSE ACADEMY (https://sydemy.com/) & UNIVERSITAS SJAKHYAKIRTI",
  "Responsive academic portals (About Campus, Facilities, News Hub) + active IT design mentorship leadership.",
  "Universitas Sjakhyakirti & Synapse Academy (sydemy.com)",
  "Academic Gateway & Dynamic News Publishing",
  [
    { label: "Campus Navigation", val: "About, Facilities" },
    { label: "News & Event Hub", val: "Graduation & Workshops" },
    { label: "Mobile-First UI", val: "Bootstrap & Tailwind" },
    { label: "IT Leadership", val: "Active Design Mentor" }
  ],
  ["🎓 About Campus", "🏛️ Main Facilities", "📰 News & Events", "📢 Gen-Z Workshops", "👨‍🏫 IT Festival Mentor", "📑 Laravel Backend"],
  [
    {
      title: "💡 CORE PURPOSE & OBJECTIVE",
      color: COLORS.TEAL_NEON, borderColor: COLORS.TEAL_NEON,
      bullets: [
        "Synapse Academy Web Portals (https://sydemy.com/): Developed official company profile platforms representing Synapse Academy online for both internal clients and external visitors.",
        "Universitas Sjakhyakirti Portal: Comprehensive university profile and information system showcasing campus facilities, academic programs, and active student news ('Workshop on Gen-Z Tech Trends').",
        "Modifies academic communication into structured digital gateways."
      ]
    },
    {
      title: "⚙️ ARCHITECTURE & DELIVERABLES",
      color: COLORS.GOLD_AMBER, borderColor: COLORS.GOLD_AMBER,
      bullets: [
        "Portal Features: Dynamic news & event publishing ('Student Graduation, Photography Bootcamp'), interactive facility showcases, and responsive mobile-first navigation ('About Campus, Facilities, News & Events').",
        "Tech Stack: PHP, Laravel, jQuery, MySQL, PostgreSQL, Bootstrap, and Tailwind CSS.",
        "IT Leadership: Served actively as a Web Design Mentor for IT Festival events, guiding junior developers in modern UI styling."
      ]
    },
    {
      title: "🚀 BUSINESS & ENTERPRISE IMPACT",
      color: COLORS.EMERALD_GREEN, borderColor: COLORS.EMERALD_GREEN,
      bullets: [
        "Significantly boosted institutional digital visibility and prospective student engagement across South Sumatra.",
        "Delivered highly accessible, mobile-responsive layouts ensuring fast loading across varying regional network speeds.",
        "Demonstrated strong leadership and communication capabilities through active mentorship of emerging tech talent."
      ]
    }
  ]
);


// --- SLIDE 22: TECHNICAL SKILLS & ENGINEERING MATRIX (Archetype E Deep-Dive Matrix) ---
let slide22 = pptx.addSlide();
addSlideHeader(slide22, "TECHNICAL TAXONOMY", "COMPLETE FULL-STACK & HARDWARE ENGINEERING MATRIX", "Comprehensive skill taxonomy spanning Low-Level Hardware, Core Backend, Modern Frontend, and Cloud DevOps.");

const matrixCols = [
  { title: "💻 LANGUAGES & SYNTAX", color: COLORS.TEAL_NEON, items: ["TypeScript / JavaScript (ES6+)", "Python (FastAPI, AI Scripting)", "PHP (Modern OOP & Laravel)", "HTML5 / CSS3 / SASS / Slicing", "SQL / NoSQL Queries & Indexing"] },
  { title: "🎨 FRONT-END & MICRO-UI", color: COLORS.GOLD_AMBER, items: ["React.js / Next.js / Vite SPA", "React Native (Mobile Cross-Platform)", "Microfrontends (Turbo & Nx Monorepo)", "Redux / Context API State Engine", "Bootstrap / Tailwind / Chakra UI / D3.js"] },
  { title: "⚙️ BACK-END & APIS", color: COLORS.EMERALD_GREEN, items: ["Node.js / Express.js Microservices", "PHP Laravel / NestJS Frameworks", "RESTful API Architecture & JWT/OAuth2", "Microservices Domain Decoupling", "AJAX / Asynchronous Handling & Queues"] },
  { title: "🗄️ DATABASES & STORAGE", color: COLORS.PURPLE_ACCENT, items: ["MySQL / PostgreSQL Relational ERD", "MongoDB NoSQL / Document Store", "Redis High-Speed Realtime Caching", "MinIO S3 Object Storage Endpoints", "Sequelize ORM / Eloquent Schema Design"] },
  { title: "🚀 DEVOPS, HARDWARE & IOT", color: COLORS.TEAL_NEON, items: ["Docker Containerization & Builds", "GitLab CI/CD Automated Pipelines Setup", "Sentry Real-Time Error Tracing & RBAC", "Jest Integration Testing QA Suite", "Raspberry Pi GPIO / Industrial PLC/HMI"] }
];

matrixCols.forEach((m, idx) => {
  const mx = 0.5 + idx * 2.48;
  slide22.addShape(pptx.ShapeType.rect, {
    x: mx, y: 1.45, w: 2.38, h: 5.5,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: m.color, width: 2 },
    rectRadius: 0.08
  });
  slide22.addText(m.title, { x: mx + 0.1, y: 1.6, w: 2.18, h: 0.5, color: m.color, fontSize: 13, bold: true, align: "center" });
  
  m.items.forEach((item, iIdx) => {
    slide22.addShape(pptx.ShapeType.rect, {
      x: mx + 0.15, y: 2.25 + iIdx * 0.9, w: 2.08, h: 0.78,
      fill: { color: COLORS.NAVY_DARK },
      line: { color: COLORS.BLUE_BORDER, width: 1 },
      rectRadius: 0.05
    });
    slide22.addText(item, {
      x: mx + 0.2, y: 2.25 + iIdx * 0.9, w: 1.98, h: 0.78,
      color: COLORS.WHITE_PURE, fontSize: 11, align: "center", valign: "middle"
    });
  });
});


// --- SLIDE 23: ARCHITECTURAL SPECIALIZATIONS (Archetype E Deep-Dive Matrix) ---
let slide23 = pptx.addSlide();
addSlideHeader(slide23, "ARCHITECTURAL CASE STUDIES", "DEEP-DIVE ARCHITECTURAL SPECIALIZATIONS", "Detailed technical breakdown of solving complex engineering bottlenecks across Enterprise, AI R&D, and Industrial IoT.");

const specCards = [
  {
    title: "1. ENTERPRISE MICROFRONTENDS\nDecoupling 100+ Module Monoliths",
    color: COLORS.TEAL_NEON,
    problem: "Massive monolithic applications (like legacy CISEA) suffer from slow build times, tight domain coupling, and high deployment risk across 100+ business units.",
    solution: "Architected modern Microfrontend systems utilizing Turbo and Nx monorepos to isolate Human Resources, IT SLA, and Mining Ops domains into independent modules.",
    impact: "Achieved independent team velocity, zero-regression deployments, and instantaneous sub-module loading across enterprise mining networks."
  },
  {
    title: "2. AI DAG ORCHESTRATION\nVisual Node & Model Pipelines",
    color: COLORS.GOLD_AMBER,
    problem: "Multi-stage generative AI media creation requires brittle, manual scripts, tedious parameter tuning, and disconnected rendering steps.",
    solution: "Engineered Supreme Mother Orchestrator V1.0—a visual Directed Acyclic Graph (DAG) node chaining engine with natural language comment parsing and custom parameter tuning.",
    impact: "Automated natural language prompt-to-model tuning, autonomous clip alignment, and 90% faster generative video turnaround without manual script intervention."
  },
  {
    title: "3. HARDWARE-TO-CLOUD IOT\nBridging Physical Sensors to REST APIs",
    color: COLORS.EMERALD_GREEN,
    problem: "Physical industrial machinery (ΔP pressure sensors, industrial relays) operate in isolated electrical silos without remote telemetry or web monitoring.",
    solution: "Developed Raspberry Pi and PLC/HMI controller simulators interfacing physical GPIO signals directly with Railway cloud REST APIs and real-time web dashboards.",
    impact: "Real-time cloud monitoring of physical chemical/mining assets, SOP-compliant interlock protection, and 50% reduction in physical hardware commissioning time."
  }
];

specCards.forEach((s, idx) => {
  const sx = 0.5 + idx * 4.18;
  slide23.addShape(pptx.ShapeType.rect, {
    x: sx, y: 1.45, w: 3.98, h: 5.5,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: s.color, width: 2 },
    rectRadius: 0.08
  });
  slide23.addText(s.title, { x: sx + 0.2, y: 1.6, w: 3.58, h: 0.7, color: s.color, fontSize: 14, bold: true, align: "center" });

  // Problem Box
  slide23.addShape(pptx.ShapeType.rect, { x: sx + 0.2, y: 2.45, w: 3.58, h: 1.35, fill: { color: COLORS.CARD_DARKER }, line: { color: "EF4444", width: 1 }, rectRadius: 0.05 });
  slide23.addText("⚠️ THE BOTTLENECK (Problem):", { x: sx + 0.3, y: 2.5, w: 3.38, h: 0.25, color: "EF4444", fontSize: 11, bold: true });
  slide23.addText(s.problem, { x: sx + 0.3, y: 2.75, w: 3.38, h: 1.0, color: COLORS.WHITE_PURE, fontSize: 11 });

  // Solution Box
  slide23.addShape(pptx.ShapeType.rect, { x: sx + 0.2, y: 3.9, w: 3.58, h: 1.45, fill: { color: COLORS.CARD_DARKER }, line: { color: s.color, width: 1 }, rectRadius: 0.05 });
  slide23.addText("💡 ARCHITECTURAL SOLUTION:", { x: sx + 0.3, y: 3.95, w: 3.38, h: 0.25, color: s.color, fontSize: 11, bold: true });
  slide23.addText(s.solution, { x: sx + 0.3, y: 4.2, w: 3.38, h: 1.1, color: COLORS.WHITE_PURE, fontSize: 11 });

  // Impact Box
  slide23.addShape(pptx.ShapeType.rect, { x: sx + 0.2, y: 5.45, w: 3.58, h: 1.35, fill: { color: COLORS.CARD_DARKER }, line: { color: COLORS.EMERALD_GREEN, width: 1 }, rectRadius: 0.05 });
  slide23.addText("🚀 MEASURABLE IMPACT:", { x: sx + 0.3, y: 5.5, w: 3.38, h: 0.25, color: COLORS.EMERALD_GREEN, fontSize: 11, bold: true });
  slide23.addText(s.impact, { x: sx + 0.3, y: 5.75, w: 3.38, h: 1.0, color: COLORS.WHITE_PURE, fontSize: 11 });
});


// --- SLIDE 24: ENGINEERING STANDARDS — QA, SECURITY & CI/CD PIPELINES ---
let slide24 = pptx.addSlide();
addSlideHeader(slide24, "PRODUCTION GOVERNANCE", "ENGINEERING STANDARDS: QA, SECURITY & CI/CD", "Rigorous automated testing, containerized continuous delivery, and banking-grade security compliance.");

// Process Flow Banner
slide24.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.45, w: 12.33, h: 0.8,
  fill: { color: COLORS.CARD_DARKER },
  line: { color: COLORS.TEAL_NEON, width: 1.5 },
  rectRadius: 0.08
});
slide24.addText("🔄 PRODUCTION PIPELINE PROTOCOL:   1. Clean Code & ERD Schema  ➔  2. Jest Automated Integration Test Suite  ➔  3. Docker Containerization  ➔  4. GitLab CI/CD Zero-Downtime Deploy  ➔  5. Sentry Real-Time Error Tracing & Audit Logs", {
  x: 0.7, y: 1.5, w: 11.9, h: 0.7,
  color: COLORS.TEAL_NEON, fontSize: 13, bold: true, align: "center"
});

const stdCards = [
  { title: "🛡️ AUTOMATED INTEGRATION TESTING (JEST)", color: COLORS.TEAL_NEON, text: "Full Integration Testing suite implemented using Jest specifically to validate data flow across microfrontend modules. Prevents breaking changes when consolidating over 100 business modules at PT Bukit Asam Tbk (cisea.bukitasam.co.id). Automated test execution enforced on every Git merge request." },
  { title: "🐳 DOCKER & GITLAB CI/CD PIPELINES", color: COLORS.GOLD_AMBER, text: "Containerization using Docker to ensure reproducible builds across local development, staging, and production clusters. Automated CI/CD Pipeline Setup in GitLab handling environment variable injection, database migrations, and zero-downtime rolling updates across enterprise servers." },
  { title: "📡 SENTRY ERROR TRACING & BANKING RBAC", color: COLORS.EMERALD_GREEN, text: "Production error monitoring and performance profiling integrated via Sentry for instant exception capture. Strict Role-Based Access Control (RBAC) and banking-grade security segregation implemented across IFG Epic Portal (hub-asum-dev.ifg-life.id) and CISEA (cisea.bukitasam.co.id), guaranteeing absolute data confidentiality." }
];
stdCards.forEach((c, idx) => {
  const cx = 0.5 + idx * 4.18;
  slide24.addShape(pptx.ShapeType.rect, {
    x: cx, y: 2.45, w: 3.98, h: 4.5,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: c.color, width: 2 },
    rectRadius: 0.08
  });
  slide24.addText(c.title, { x: cx + 0.2, y: 2.65, w: 3.58, h: 0.6, color: c.color, fontSize: 13.5, bold: true });
  slide24.addText(c.text, { x: cx + 0.2, y: 3.4, w: 3.58, h: 3.3, color: COLORS.WHITE_PURE, fontSize: 10.5 });
});


// --- SLIDE 25: PROFESSIONAL VALUE PROPOSITION — WHY MUHAMMAD HAIDAR SHAHAB? ---
let slide25 = pptx.addSlide();
addSlideHeader(slide25, "VALUE PROPOSITION", "WHY MUHAMMAD HAIDAR SHAHAB?", "Adaptive engineering excellence combining enterprise execution, cross-domain versatility, and continuous learning.");

const whyCards = [
  {
    title: "1. PROVEN ENTERPRISE EXECUTION\nTrusted by BUMN & Financial Giants",
    color: COLORS.TEAL_NEON,
    text: "Demonstrated track record executing large-scale digital transformations for major state-owned enterprises and financial holding companies (PT Bukit Asam Tbk at cisea.bukitasam.co.id, PT Pupuk Sriwidjaja, IFG Life at hub-asum-dev.ifg-life.id, Synapse Academy at sydemy.com). Delivers high-security, SLA-monitored, production-ready code under strict organizational governance and complex stakeholder environments."
  },
  {
    title: "2. RARE CROSS-DOMAIN VERSATILITY\nFrom Hardware GPIO to AI DAGs",
    color: COLORS.GOLD_AMBER,
    text: "Unique technical breadth: perfectly comfortable wiring industrial PLC/Raspberry Pi sensors as he is architecting React Microfrontends or Python AI video automation engines. Eliminates communication barriers between hardware instrumentation engineers, backend API architects, and frontend UX designers."
  },
  {
    title: "3. INDUSTRY-ALIGNED ADAPTABILITY\nPragmatic & Continuous Growth Mindset",
    color: COLORS.EMERALD_GREEN,
    text: "An honest, growth-oriented engineering professional who continuously adapts to emerging industry standards. Not bound to a single framework, but driven by pragmatic problem-solving, clean architecture principles, and building systems that work reliably 24/7 in production."
  }
];
whyCards.forEach((c, idx) => {
  const cx = 0.5 + idx * 4.18;
  slide25.addShape(pptx.ShapeType.rect, {
    x: cx, y: 1.45, w: 3.98, h: 5.5,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: c.color, width: 2 },
    rectRadius: 0.08
  });
  slide25.addText(c.title, { x: cx + 0.2, y: 1.65, w: 3.58, h: 0.7, color: c.color, fontSize: 13.5, bold: true, align: "center" });
  slide25.addText(c.text, { x: cx + 0.2, y: 2.5, w: 3.58, h: 4.2, color: COLORS.WHITE_PURE, fontSize: 10.5 });
});


// --- SLIDE 26: CONNECT & COLLABORATE (CLOSING SLIDE) ---
let slide26 = pptx.addSlide();
slide26.background = { fill: COLORS.NAVY_DARK };

slide26.addShape(pptx.ShapeType.rect, {
  x: 0.3, y: 0.3, w: 12.73, h: 6.9,
  fill: { color: COLORS.NAVY_DARK },
  line: { color: COLORS.TEAL_NEON, width: 2 },
  rectRadius: 0.1
});

slide26.addText("LET'S BUILD THE NEXT GENERATION OF SOFTWARE", {
  x: 1.0, y: 0.9, w: 11.3, h: 0.8,
  color: COLORS.WHITE_PURE, fontSize: 30, bold: true, align: "center", fontFace: "Segoe UI"
});

slide26.addText("Available for Remote, Hybrid, or On-Site Senior Full-Stack Engineering, Project Management & Business Analyst Leadership Roles", {
  x: 1.0, y: 1.75, w: 11.3, h: 0.5,
  color: COLORS.TEAL_NEON, fontSize: 16, italic: true, align: "center", fontFace: "Segoe UI"
});

const contacts = [
  { label: "🌐 LIVE PORTFOLIO", val: "profile-muhammad-haidar-shahab.netlify.app", color: COLORS.TEAL_NEON },
  { label: "🏢 ENTERPRISE PORTALS", val: "hub-asum-dev.ifg-life.id  |  cisea.bukitasam.co.id  |  sydemy.com", color: COLORS.EMERALD_GREEN },
  { label: "📦 CODE REPOSITORIES", val: "github.com/haidar180202  |  gitlab.com/haidar180202", color: COLORS.GOLD_AMBER },
  { label: "📍 LOCATION & BASE", val: "Palembang / South Sumatra, Indonesia", color: COLORS.WHITE_PURE }
];

contacts.forEach((ct, idx) => {
  const cy = 2.6 + idx * 1.0;
  slide26.addShape(pptx.ShapeType.rect, {
    x: 1.8, y: cy, w: 9.7, h: 0.82,
    fill: { color: COLORS.SLATE_CARD },
    line: { color: ct.color, width: 1.5 },
    rectRadius: 0.08
  });
  slide26.addText(ct.label, { x: 2.1, y: cy + 0.1, w: 3.5, h: 0.62, color: ct.color, fontSize: 15, bold: true, valign: "middle" });
  slide26.addText(ct.val, { x: 5.6, y: cy + 0.1, w: 5.6, h: 0.62, color: COLORS.WHITE_PURE, fontSize: 15, bold: true, align: "right", valign: "middle" });
});

// Save Presentation with multi-tier automatic fallback if files are open in PowerPoint
const pathsToTry = [
  path.join(__dirname, "Project_Development_Portfolio_Haidar_v5_Master.pptx"),
  path.join(__dirname, "Project_Development_Portfolio_Haidar_v4_ZeroClip.pptx"),
  path.join(__dirname, "Project_Development_Portfolio_Haidar.pptx"),
  path.join(__dirname, "Project_Development_Portfolio_Haidar_Executive_Archetypes.pptx"),
  path.join(__dirname, "Project_Development_Portfolio_Haidar_v3_Final.pptx"),
  path.join(__dirname, `Project_Development_Portfolio_Haidar_Updated_${Date.now()}.pptx`)
];

async function trySaveDeck(index = 0) {
  if (index >= pathsToTry.length) {
    console.error("All save paths are busy or locked by another application.");
    return;
  }
  const targetPath = pathsToTry[index];
  try {
    await pptx.writeFile({ fileName: targetPath });
    console.log(`Successfully generated executive presentation deck with Archetypes A-E: ${targetPath}`);
  } catch (err) {
    if (err && err.code === 'EBUSY') {
      console.warn(`File ${path.basename(targetPath)} is currently open/locked in PowerPoint. Trying next path...`);
      await trySaveDeck(index + 1);
    } else {
      console.error("Error generating presentation deck:", err);
    }
  }
}

trySaveDeck();
