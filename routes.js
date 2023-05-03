const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM persona', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
 })

 routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        console.log(req.body)
       
        conn.query('INSERT INTO persona set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('alumno agregado')
            
        })
    })
 })
 routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
       
       
        conn.query('DELETE FROM persona WHERE id = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('alumno eliminado')
            
        })
    })
 })

 routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        
       
        conn.query('UPDATE persona set ? WHERE id = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('alumno actualizado')
            
        })
    })
 })


module.exports = routes