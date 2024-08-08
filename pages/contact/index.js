

import { useState } from "react";
import { toast } from "react-hot-toast";
// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer-motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '/components/Variants';

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          name, email, phone, message
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      setName(''), setEmail(''), setPhone(''), setMessage('')
      toast.success(`Hey ${name} your message was sent successfully!`)
    } catch (err) {
      console.error('Err', err)
    }
  }
  return (
    <div className="h-full pt-20 bg-primary/30">
      <div
        className="container mx-auto py-32 text-center xl:text-left 
      flex items-center justify-center h-full"
      >
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&lsquo;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={onSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="email"
                className="input normal-case"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="tel"
              placeholder="phone no (optional)"
              className="input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="message"
              className="textarea normal-case"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-accent group"
            >
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500"
              >
                Let&lsquo;s Talk
              </span>
              <BsArrowRight
                className="translate-x-[120%] opacity-0 group-hover:flex
              group-hover:-translate-x-0 group-hover:opacity-100 transition-all 
              duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
