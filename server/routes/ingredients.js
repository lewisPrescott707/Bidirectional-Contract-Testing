const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /ingredients/{cakeName}:
 *   get:
 *     description: ingredients by cake name.
 *     parameters:
 *       - name: cakeName
 *         in: path
 *         description: Name of cake
 *         required: true
 *         schema:
 *           type: string
 *           default: chocolate
 *     responses:
 *       200:
 *         description: Returns a list of ingredients.
 *         headers:
 *           Access-Control-Allow-Origin:
 *             schema:
 *               type: string
 *               default: "*"
 *             description: "*"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/ingredients/:cakeName', (req, res) => {
    const name = req.params.cakeName;
    if (name === "chocolate" || name === "0" || name === 0) {
        return res.status(200).json([
            "sugar"
        ]);
    } else {
        return res.status(200).json(["Cake not found"]);
    }
});

module.exports = router
