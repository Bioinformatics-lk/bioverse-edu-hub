
import { useEffect, useState } from 'react'

interface StatItem {
  label: string
  value: number
}

const AnimatedStats = () => {
  const [counts, setCounts] = useState({ courses: 0, students: 0, tutors: 0 })
  
  const stats: StatItem[] = [
    { label: 'Courses', value: 6 },
    { label: 'Students Enrolled', value: 10 },
    { label: 'Expert Tutors', value: 4 }
  ]

  useEffect(() => {
    const animateCount = (target: number, key: keyof typeof counts) => {
      const duration = 2000 // 2 seconds
      const step = target / (duration / 16) // 60fps
      let current = 0
      
      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, 16)
    }

    // Start animations with slight delays
    setTimeout(() => animateCount(6, 'courses'), 500)
    setTimeout(() => animateCount(10, 'students'), 700)
    setTimeout(() => animateCount(4, 'tutors'), 900)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="glass-card p-8 rounded-2xl card-hover">
                <div className="text-5xl font-bold color-accent-text mb-4">
                  {index === 0 ? counts.courses : index === 1 ? counts.students : counts.tutors}
                </div>
                <div className="text-xl font-semibold text-slate-700">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedStats
