import { useState } from 'react'
import { DashboardStats } from './components/DashboardStats/DashboardStats'
import { TaskForm } from './components/TaskForm/TaskForm'
import { RecentActivity } from './components/RecentActivity/RecentActivity'
import type { Task } from './types/task'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Setup Project', status: 'completed', priority: 'high', createdAt: new Date() },
    { id: '2', title: 'Design UI', status: 'pending', priority: 'medium', createdAt: new Date() },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: 'pending',
      priority: 'medium',
      createdAt: new Date(),
    }
    setTasks(prev => [newTask, ...prev])
    setIsModalOpen(false)
  }

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(t => t.status === 'completed').length
  const productivityRate = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="app-container">
      <header className="app-header">
        <nav className="app-nav">
          <div className="nav-logo">TaskManager</div>
          <ul className="nav-links">
            <li><a href="#dashboard" className="nav-link active">Dashboard</a></li>
            <li><a href="#tasks" className="nav-link">Tasks</a></li>
            <li><a href="#settings" className="nav-link">Settings</a></li>
          </ul>
          <div className="nav-user">
            <div className="user-avatar">R</div>
            <span className="user-name">Raj</span>
          </div>
        </nav>
      </header>

      <main className="app-main">
        <section className="dashboard-section">
          <div className="section-header">
            <h1>Dashboard Overview</h1>
            <button
              className="primary-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Create New Task
            </button>
          </div>
          <DashboardStats
            totalTasks={totalTasks}
            completedTasks={completedTasks}
            productivityRate={productivityRate}
          />
        </section>

        <RecentActivity tasks={tasks} />
      </main>

      {isModalOpen && (
        <TaskForm
          onAddTask={addTask}
          onCancel={() => setIsModalOpen(false)}
        />
      )}

      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2026 TaskManager. Built with React & Vite.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#support">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
