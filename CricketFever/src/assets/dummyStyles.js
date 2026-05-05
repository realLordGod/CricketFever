// src/assets/dummyStyles.js

export const headerStyles = {
  // Layout styles
  container: "sticky top-4 z-50 px-4 transition-all duration-300",
  innerContainer: "max-w-7xl mx-auto",
  mainWrapper: "backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-3 flex items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.05)]",
  
  // Logo section
  logoContainer: "flex items-center gap-3 group cursor-pointer",
  logoImage: "w-11 h-11 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-indigo-50 to-white shadow-inner transition-transform group-hover:scale-105",
  logoImg: "w-full h-full object-contain p-1",
  logoText: "hidden lg:block",
  logoTitle: "text-slate-900 font-bold text-2xl tracking-tight leading-none group-hover:text-indigo-600 transition-colors",
  
  // Search section
  searchForm: "flex-1 flex items-center justify-center md:justify-start",
  searchWrapper: "w-full max-w-lg relative group",
  searchInput: "w-full rounded-2xl border border-slate-200 bg-white/50 py-2.5 pl-5 pr-12 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all shadow-sm",
  searchButton: "absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 hover:shadow-indigo-500/40 active:scale-95 transition-all",
  
  // Navigation section
  navContainer: "hidden xl:flex items-center gap-5",
  navButtons: "text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all hover:after:w-full",
  authContainer: "flex items-center gap-3",
  loginButton: "px-5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 bg-white/50 hover:bg-white hover:text-indigo-600 border border-slate-200 transition-all",
  signupButton: "px-6 py-2.5 rounded-2xl bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-900/10 hover:bg-indigo-600 hover:shadow-indigo-500/25 active:scale-95 transition-all",
  
  // Mobile menu
  mobileMenuButton: "xl:hidden ml-auto",
  menuToggleButton: "p-2.5 rounded-2xl bg-white/80 border border-slate-200 text-slate-700 hover:text-indigo-600 hover:bg-white transition-all shadow-sm",
  menuIcon: "w-6 h-6",
  mobileMenu: "mt-4 p-5 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 absolute right-4 top-20 w-[calc(100%-32px)] max-w-xs animate-in fade-in slide-in-from-top-4 duration-300",
  mobileNav: "flex flex-col gap-3",
  mobileNavButton: "text-sm font-medium text-slate-700 text-left w-full px-4 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all",
  mobileAuthContainer: "mt-5 flex flex-col gap-3",
  mobileAuthButton: "w-full px-5 py-3 rounded-xl font-semibold text-sm transition-all",
  mobileLogin: "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100",
  mobileSignup: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-700"
};


export const liveMatchStyles = {
  // Main container
  container: "space-y-4",
  
  // Header section
  headerContainer: "backdrop-blur-md bg-white/50 p-3 rounded-2xl flex items-center justify-between",
  titleWrapper: "live-title",
  title: "title",
  dotPulse: "dot-pulse",
  dotBase: "dot-base",
  subtitle: "text-xs text-slate-500",
  
  // Quota mode alert
  quotaAlert: "rounded-2xl p-3 bg-amber-50 border border-amber-200 text-amber-800 text-sm",
  
  // Loading/error states
  loadingContainer: "p-6",
  errorContainer: "p-6 text-rose-600",
  
  // Matches grid
  matchesGrid: "grid grid-cols-1 lg:grid-cols-2 gap-6",
  
  // Individual match card
  matchCard: "group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-100 via-blue-50 to-indigo-100 hover:scale-[1.02] transform-gpu transition-all duration-200 shadow-lg",
  matchCardInner: "rounded-2xl bg-white/80 backdrop-blur-md p-4 h-full flex flex-col justify-between",
  
  // Match header (status and time)
  matchHeader: "flex items-start justify-between",
  matchStatus: "text-sm font-medium text-slate-800 truncate max-w-[60%]",
  matchTime: "text-xs text-slate-500",
  
  // Teams section
  teamsContainer: "mt-4 flex items-center justify-between gap-4",
  teamContainer: "flex items-center gap-3 min-w-0",
  teamContainerReversed: "flex items-center gap-3 min-w-0 justify-end",
  teamName: "text-sm font-semibold text-slate-900 truncate",
  teamScore: "text-xs text-slate-500 mt-1",
  vsText: "text-xs text-slate-400",
  
  // Match footer
  matchFooter: "mt-4 flex items-center justify-between text-xs text-slate-600",
  detailsButton: "px-3 py-1 rounded-full bg-white/70 text-xs shadow-sm hover:bg-white",
  matchId: "text-xs text-slate-400 hidden sm:block",
  venue: "text-xs text-slate-500",
  
  // Flag styles
  flagImage: "w-12 h-8 object-cover rounded-md shadow-sm flex-shrink-0",
  emojiContainer: "w-12 h-10 flex items-center justify-center text-2xl",
  initialsContainer: "w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white shadow",
  
  // No matches state
  noMatchesContainer: "rounded-2xl p-4 bg-white/90 text-sm text-slate-600",
  rawDataPre: "max-h-64 overflow-auto text-xs bg-slate-50 p-3 rounded",
  
  // Refresh button
  refreshButton: "px-3 py-1 rounded-full bg-white shadow-sm text-sm",
  
  // Live indicator styles (for CSS classes)
  liveTitle: `
.live-title {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.title {
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
}

.dot-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ef4444;
  position: relative;
  animation: pulse 1.5s infinite;
}

.dot-base {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ef4444;
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(239, 68, 68, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}
  `
};

// Color palette for team initials
export const colorPalette = [
  ['#06b6d4', '#3b82f6'],
  ['#7c3aed', '#06b6d4'],
  ['#ef4444', '#f97316'],
  ['#10b981', '#06b6d4'],
  ['#8b5cf6', '#06b6d4'],
  ['#ef6f6c', '#7c3aed'],
  ['#0ea5a4', '#60a5fa'],
];

// Helper function to pick colors for team initials
export const pickColors = (s) => {
  if (!s) return colorPalette[0];
  const sum = [...s].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return colorPalette[sum % colorPalette.length];
};

// Helper function to get gradient style for team initials
export const getGradientStyle = (c1, c2) => ({
  background: `linear-gradient(90deg, ${c1} 0%, ${c1} 50%, ${c2} 50%, ${c2} 100%)`,
});

export const matchDetailStyles = {
  // Main container
  container: "space-y-6",
  
  // Header section
  headerContainer: "backdrop-blur-md bg-white/60 p-3 rounded-2xl border border-white/30 flex items-center justify-between",
  headerTitle: "text-sm text-slate-800 font-medium",
  headerSubtitle: "text-xs text-slate-500",
  headerButtonGroup: "flex items-center gap-3",
  lastUpdatedText: "text-xs text-slate-500",
  refreshButton: "px-3 py-1 rounded-full bg-white border border-white/30 text-sm",
  rawToggleButton: "px-3 py-1 rounded-full bg-white/30 border border-white/30 text-xs text-slate-600",
  
  // Loading/error states
  loadingContainer: "p-6",
  errorContainer: "p-6 text-rose-600",
  
  // Main content grid
  mainGrid: "grid grid-cols-1 lg:grid-cols-3 gap-6",
  leftColumn: "lg:col-span-2 space-y-4",
  scoreboardContainer: "mt-4",
  
  // Raw data section
  rawDataContainer: "rounded-2xl p-4 bg-white border border-white/30 text-sm text-slate-600",
  rawDataTitle: "font-medium mb-2",
  rawDataSectionTitle: "text-xs mb-2",
  rawDataPre: "max-h-40 overflow-auto bg-slate-50 p-3 rounded",
  
  // Sidebar sections
  sidebarContainer: "space-y-4",
  summaryCard: "rounded-2xl border border-white/30 bg-white p-4",
  summaryTitle: "text-sm font-medium text-slate-700 mb-2",
  summaryText: "text-sm text-slate-600",
  venueText: "text-xs text-slate-500 mt-2",
  
  // Players section
  playersCard: "rounded-2xl border border-white/30 bg-white p-4",
  playersTitle: "text-sm font-medium text-slate-700 mb-2",
  noPlayersText: "text-sm text-slate-500 mt-2"
};

// src/assets/dummyStyles.js

export const matchCardStyles = {
  // Main container
  card: "rounded-2xl overflow-hidden shadow-sm border border-white/30 cursor-pointer hover:shadow-md transition",
  
  // Header section
  header: "backdrop-blur-md bg-white/60 px-4 py-3 flex items-center justify-between",
  venue: "text-sm text-slate-700 font-medium",
  time: "text-xs text-slate-600",
  
  // Main content
  content: "bg-white p-5",
  teamsContainer: "flex items-center justify-between",
  teamsWrapper: "flex items-center gap-6",
  
  // Team sections
  teamContainer: "text-center",
  teamInfo: "flex items-center gap-2",
  flagContainer: "w-10 h-10 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center",
  flagImage: "w-full h-full object-cover",
  flagEmoji: "text-xl",
  flagInitials: "text-sm font-medium text-slate-700",
  teamName: "text-sm text-slate-500",
  teamScore: "text-2xl font-semibold text-slate-800 mt-2",
  
  // VS separator
  vs: "text-slate-400",
  
  // Status section
  statusContainer: "text-right",
  status: "text-sm font-semibold",
  statusLive: "text-emerald-600",
  statusDefault: "text-slate-600",
  matchId: "text-xs text-slate-400 mt-1",
  
  // Scorecard link
  scorecard: "mt-4 text-sm text-slate-600",
  
  // Footer
  footer: "backdrop-blur-md bg-white/60 px-4 py-2 flex items-center justify-between text-xs text-slate-600 border-t border-white/30",
  details: "opacity-80"
};

export const playerListStyles = {
  // Empty state
  noPlayersContainer: "p-4 bg-white rounded-xl shadow-sm text-sm text-slate-500",
  
  // Main list container
  listContainer: "space-y-3",
  
  // Player item
  playerItem: "w-full text-left p-3 rounded-lg bg-white border border-white/30 hover:shadow-sm flex items-center gap-4",
  
  // Avatar container
  avatarContainer: "flex-shrink-0",
  
  // Avatar styles
  avatarImage: "w-full h-full rounded-full object-cover",
  avatarFallback: "w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-medium",
  
  // Player info section
  playerInfo: "flex-1",
  playerMainInfo: "flex items-center justify-between",
  playerName: "font-medium text-slate-800",
  playerDetails: "text-xs text-slate-500",
  playerStats: "text-sm text-slate-700",
  playerBio: "text-xs text-slate-500 mt-1 line-clamp-2"
};

// Avatar size configuration
export const avatarSizes = {
  compact: {
    width: 36,
    height: 36
  },
  default: {
    width: 44,
    height: 44
  }
};



export const scoreboardStyles = {
  // Main container
  container: "rounded-2xl p-[1px] bg-gradient-to-br from-cyan-100/40 via-blue-50/30 to-indigo-100/30 overflow-hidden",
  innerContainer: "rounded-2xl bg-white/85 backdrop-blur-sm",
  
  // Header section
  header: "px-5 py-4 flex items-start justify-between",
  title: "text-sm text-slate-700 font-medium",
  matchId: "text-xs text-slate-500 mt-1",
  updateStatus: "text-xs text-slate-500",
  
  // Content area
  content: "p-6 space-y-4",
  loading: "text-sm text-slate-500",
  error: "text-sm text-rose-600",
  
  // Teams header
  teamsHeader: "rounded-2xl p-4 bg-white border border-white/30",
  teamsContainer: "flex items-center gap-4 justify-between",
  teamWrapper: "flex items-center gap-4 min-w-0",
  teamFlagContainer: "flex items-center gap-3",
  flagImage: "w-8 h-6 object-cover rounded-sm shadow-sm",
  flagEmoji: "w-8 h-6 flex items-center justify-center text-lg",
  flagInitials: "w-8 h-8 rounded-full flex items-center justify-center font-semibold text-white text-xs",
  teamInfo: "min-w-0",
  teamName: "text-sm font-semibold text-slate-900 truncate",
  teamMeta: "text-xs text-slate-500 truncate",
  vs: "text-xs text-slate-400",
  
  // Innings sections
  inningsContainer: "space-y-4",
  inningsItem: "rounded-2xl overflow-hidden",
  inningsHeader: "flex items-center justify-between p-3 cursor-pointer backdrop-blur-md bg-white/60",
  inningsTitle: "text-sm font-medium text-slate-800",
  inningsSummary: "text-xs text-slate-500",
  inningsScore: "text-sm text-slate-700",
  inningsOvers: "text-xs text-slate-500",
  
  // Expanded innings content
  expandedInnings: "bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-4",
  sectionTitle: "text-xs text-slate-500 mb-2 font-medium",
  
  // Batsmen and bowlers lists
  batsmenList: "space-y-2",
  batsmanItem: "p-2 rounded-md bg-slate-50 flex items-center justify-between",
  batsmanInfo: "min-w-0",
  batsmanName: "font-medium text-slate-800 truncate",
  batsmanOutDesc: "text-xs text-slate-500 truncate",
  batsmanStats: "text-right text-sm text-slate-600 min-w-[96px]",
  batsmanExtras: "text-xs text-slate-500",
  
  bowlersList: "space-y-2",
  bowlerItem: "p-2 rounded-md bg-slate-50 flex items-center justify-between",
  bowlerName: "font-medium text-slate-800 truncate",
  bowlerStats: "text-xs text-slate-600",
  
  // No data states
  noData: "rounded-2xl p-4 bg-white/90 text-sm text-slate-600",
  noBatsmen: "text-sm text-slate-500",
  noBowlers: "text-sm text-slate-500",
  
  // Raw data display
  rawPayload: "text-sm text-slate-600 mb-2",
  rawPre: "text-xs max-h-60 overflow-auto bg-slate-50 p-3 rounded",
  rawToggle: "px-3 py-1 rounded-full bg-white border border-white/30 text-xs",
  rawWrapper: "text-xs mt-3 max-h-64 overflow-auto bg-white p-3 rounded border",
  
  // Footer
  footer: "px-5 py-3 text-xs text-slate-600 bg-white/60 backdrop-blur-md flex items-center justify-between border-t border-white/30",
  footerDetails: "opacity-80"
};

export const scoreCardStyles = {
  // Main container
  container: "space-y-4",
  
  // No data states
  noDataContainer: "p-4 bg-white rounded-xl shadow-sm text-sm text-slate-600",
  emptyStateContainer: "p-6 bg-white rounded-xl shadow-sm text-sm text-slate-600",
  
  // Innings container
  inningsContainer: "rounded-2xl border border-white/30 overflow-hidden",
  
  // Header section
  header: "backdrop-blur-md bg-white/60 px-5 py-3 flex items-center justify-between",
  headerTitle: "text-sm text-slate-700 font-medium",
  headerScore: "text-xs text-slate-500 mt-1",
  expandButton: "text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-800",
  
  // Body section
  body: "bg-white p-5 space-y-4",
  
  // Batting section
  battingSection: "text-sm font-medium text-slate-700 mb-2",
  battingTableContainer: "w-full overflow-x-auto rounded-lg border border-slate-100",
  battingTable: "w-full text-sm",
  tableHeader: "text-left text-xs text-slate-500",
  tableHeaderCell: "px-3 py-2",
  tableRow: "border-t last:border-b",
  tableCell: "px-3 py-2",
  batsmanName: "font-medium text-slate-700",
  batsmanDesc: "text-xs text-slate-500",
  noBatsmenText: "text-sm text-slate-500",
  
  // Bowling section
  bowlingSection: "text-sm font-medium text-slate-700 mb-2",
  bowlersGrid: "grid grid-cols-1 md:grid-cols-2 gap-2",
  bowlerCard: "p-3 rounded-lg bg-slate-50",
  bowlerHeader: "flex items-center justify-between",
  bowlerName: "font-medium text-slate-700",
  bowlerRole: "text-xs text-slate-500",
  bowlerStats: "text-sm text-slate-700",
  bowlerDetails: "mt-2 text-xs text-slate-500",
  noBowlersText: "text-sm text-slate-500",
  
  // Summary section
  summarySection: "text-sm text-slate-600",
  summaryTitle: "font-medium text-slate-700 mb-1",
  
  // Collapsed preview
  collapsedPreview: "bg-white p-4 text-sm text-slate-600",
  
  // Footer section
  footer: "backdrop-blur-md bg-white/60 px-5 py-3 text-xs text-slate-600 border-t border-white/30 flex items-center justify-between",
  oversText: "opacity-80"
};


export const upcomingMatchesStyles = {
  // Main container
  container: "space-y-4",
  
  // Header section
  headerContainer: "backdrop-blur-md bg-white/50 p-3 rounded-2xl flex items-center justify-between",
  headerTitle: "text-sm font-semibold text-slate-800",
  headerSubtitle: "text-xs text-slate-500",
  lastUpdatedText: "text-xs text-slate-500",
  refreshButton: "px-3 py-1 rounded-full bg-white shadow-sm text-sm",
  
  // Quota mode alert
  quotaAlert: "rounded-2xl p-3 bg-amber-50 text-amber-800 text-sm",
  
  // Groups container
  groupsContainer: "space-y-6",
  
  // Series section
  seriesSection: "relative",
  seriesHeader: "mb-3 flex items-center justify-between",
  seriesTitle: "text-sm font-semibold text-slate-800",
  seriesMatchCount: "text-xs text-slate-500",
  seriesLabel: "text-xs text-slate-500 hidden sm:block",
  
  // Matches grid
  matchesGrid: "grid grid-cols-1 md:grid-cols-2 gap-5",
  
  // Match article
  matchArticle: "group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-100 via-blue-50 to-indigo-100 transform-gpu transition-all duration-200 hover:scale-[1.02] shadow-md",
  matchArticleInner: "rounded-2xl bg-white/80 backdrop-blur-md p-4 h-full flex flex-col justify-between",
  
  // Match header (time and venue)
  matchHeader: "flex items-center justify-between",
  matchTime: "text-xs text-slate-600",
  matchVenue: "text-xs text-slate-400",
  
  // Teams section
  teamsContainer: "mt-3 flex items-center justify-between gap-4",
  teamContainer: "flex items-center gap-3 min-w-0",
  teamContainerReversed: "flex items-center gap-3 min-w-0 justify-end",
  teamName: "text-sm font-semibold text-slate-900 truncate",
  teamStatus: "text-xs text-slate-500 mt-1",
  vsText: "text-xs text-slate-400",
  
  // Match footer
  matchFooter: "mt-4 flex items-center justify-between text-xs text-slate-600",
  detailsButton: "px-3 py-1 rounded-full bg-white/70 text-xs shadow-sm hover:bg-white",
  matchId: "text-xs text-slate-400 hidden sm:block",
  matchDate: "text-xs text-slate-500",
  
  // Flag styles
  flagImage: "w-10 h-7 object-cover rounded-md shadow-sm flex-shrink-0",
  emojiContainer: "w-10 h-8 flex items-center justify-center text-xl",
  initialsContainer: "w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white shadow",
  
  // No matches state
  noMatchesContainer: "rounded-2xl p-4 bg-white/90 text-sm text-slate-600",
  rawDataPre: "max-h-64 overflow-auto text-xs bg-slate-50 p-3 rounded",
  
  // Loading/error states
  loadingContainer: "p-6",
  errorContainer: "p-6 text-rose-600"
};

export const homeStyles = {
  // Root layout
  root: "min-h-screen relative bg-[#f8fafc] text-slate-900 overflow-x-hidden font-sans",
  
  // Decorative elements
  blob1: "pointer-events-none absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full opacity-40 blur-[100px] animate-pulse-soft",
  blob1Gradient: "radial-gradient(circle at 50% 50%, #818cf8, #c084fc, transparent 70%)",
  blob2: "pointer-events-none absolute top-1/2 right-[-240px] w-[720px] h-[720px] rounded-full opacity-30 blur-[120px] animate-pulse-soft",
  blob2Gradient: "radial-gradient(circle at 50% 50%, #22d3ee, #818cf8, transparent 70%)",
  
  // Header positioning
  headerContainer: "fixed inset-x-0 top-6 z-50",
  
  // Main content
  main: "max-w-7xl mx-auto px-6 pt-28 md:pt-36 pb-20",
  section: "mb-20 fade-in-up",
  
  // Hero section
  heroWrapper: "relative group",
  heroBox: "relative overflow-hidden rounded-[2.5rem] px-8 md:px-14 py-16 md:py-20 bg-slate-900 shadow-2xl shadow-indigo-500/10",
  heroSpotlight: "absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500",
  heroSpotlightGradient: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.4), transparent 50%)",
  heroContent: "relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
  
  // Hero text
  heroText: "text-left",
  heroTitle: "text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight",
  heroSubtitle: "mt-6 text-slate-400 text-base md:text-lg max-w-lg leading-relaxed",
  
  // Hero buttons
  heroButtons: "mt-10 flex flex-wrap gap-4",
  primaryButton: "px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold shadow-xl shadow-indigo-600/25 hover:bg-indigo-700 hover:-translate-y-0.5 active:translate-y-0 transition-all",
  secondaryButton: "px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all",
  
  // Hero features
  heroFeatures: "mt-12 flex flex-wrap gap-6 text-sm text-slate-500 font-medium",
  featureTag: "flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-500",
  
  // Hero shadow
  heroShadow: "absolute -inset-4 bg-indigo-500/5 blur-3xl -z-10 rounded-full group-hover:bg-indigo-500/10 transition-all duration-700",
  
  // Layout sections
  gridSection: "grid grid-cols-1 lg:grid-cols-12 gap-10",
  mainContent: "lg:col-span-8 space-y-10",
  sidebar: "lg:col-span-4",
  sidebarSticky: "sticky top-28 space-y-8",
  
  // Section headers
  sectionHeader: "flex items-end justify-between mb-8",
  sectionTitle: "text-2xl font-bold text-slate-900 tracking-tight",
  sectionSubtitle: "text-sm text-slate-500 font-medium",
  
  // Live matches section
  liveStatus: "flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm",
  liveCount: "text-sm font-bold text-indigo-600",
  
  // Quick score sidebar
  quickScoreCard: "rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow",
  quickScoreHeader: "flex items-center justify-between mb-4",
  quickScoreTitle: "text-sm font-bold text-slate-900 uppercase tracking-wider",
  quickScoreStatus: "flex items-center gap-2 text-xs font-bold text-rose-500 uppercase",
  quickScoreContent: "text-base font-medium text-slate-700 mb-6",
  quickScoreButton: "w-full py-3 rounded-xl bg-slate-50 text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors",
  
  // Details section
  detailsSection: "mt-12",
  detailsCard: "rounded-3xl border border-slate-100 bg-white p-8 shadow-sm",
  detailsTitle: "text-xl font-bold text-slate-900 mb-6",
  detailsContent: "space-y-8",
  
  // Team section
  teamSection: "mt-10",
  teamCard: "rounded-3xl border border-slate-100 bg-white p-8 shadow-sm",
  teamTitle: "text-xl font-bold text-slate-900 mb-4"
};



export const footerStyles = {
  // Main container
  container: "mt-24 mb-10 px-6",
  innerContainer: "max-w-7xl mx-auto",
  
  // Content section
  content: "backdrop-blur-2xl bg-white/50 border border-slate-100 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm",
  
  // Logo and copyright section
  logoContainer: "flex flex-col items-center md:items-start gap-2",
  copyright: "text-sm font-medium text-slate-400",
  
  // Navigation and social section
  navContainer: "flex flex-col md:flex-row items-center gap-8 md:gap-12",
  nav: "flex items-center gap-6 text-sm font-semibold text-slate-600",
  navLink: "hover:text-indigo-600 transition-colors",
  
  // Social icons
  socialContainer: "flex items-center gap-4",
  socialLink: "w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 transition-all",
  socialIcon: "w-5 h-5"
};