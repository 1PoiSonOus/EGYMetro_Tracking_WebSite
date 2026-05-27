# 🚉 EGYMetro Tracking & Route Planner

**EGYMetro** is a modern, interactive web application designed to help commuters navigate the Cairo Metro network efficiently. The app calculates the shortest path between any two stations across Line 1, 2, and 3, handling transfers and providing detailed journey stats.

## 🚀 Key Features
- **Smart Routing:** Uses the **BFS (Breadth-First Search) Algorithm** to find the most efficient path (minimum number of stations).
- **Transfer Detection:** Automatically identifies and notifies the user about line transfer stations (e.g., Sadat, Attaba, Al Shohadaa).
- **Interactive Search:** Custom-built dropdown selectors with search/filter functionality for quick station selection.
- **Modern UI/UX:** A sleek, dark-themed responsive design inspired by high-end transit apps, optimized for both mobile and desktop.
- **Journey Insights:** Displays total number of stations, number of transfers, and the estimated line changes.

## 🧠 The Logic (Algorithm)
The project represents the Cairo Metro network as a **Graph Data Structure**, where:
- **Nodes:** Represent Metro stations.
- **Edges:** Represent the tracks between stations.
- **BFS Algorithm:** Since all station intervals are treated as equal weights, the BFS ensures the discovery of the path with the fewest number of hops (stations).

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3 (Custom Variables, Grid, Flexbox).
- **Logic:** Vanilla JavaScript (ES6+).
- **Styling:** Custom CSS with Glassmorphism effects and smooth animations.

## 📱 Screenshots
*(Add your project screenshots here)*
![Preview](https://via.placeholder.com/800x450?text=EGYMetro+Interface+Preview)

## 🏗️ Project Structure
- `index.html`: The core structure and UI containers.
- `cairo_metro.css`: Modern styling including dark mode, custom scrollbars, and animations.
- `cairo_metro.js`: Contains the graph data, BFS implementation, and UI logic.

## ⚙️ How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/EGYMetro_Tracking_WebSite.git
