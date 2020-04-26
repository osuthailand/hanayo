package main

import (
	"database/sql"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

func reportUser(c *gin.Context) {
	// Made by Simon
	var (
		allowedtoreport bool
	)
	user, err := strconv.ParseInt(c.PostForm("userid"), 10, 32)
	if err != nil {
		c.Error(err)
	}
	ctx := getContext(c)
	if ctx.User.ID == 0 {
		resp403(c)
		return
	}
	err = db.QueryRow("SELECT allowedtoreport FROM users WHERE id = ? ", ctx.User.ID).Scan(&allowedtoreport)
	if err != nil && err != sql.ErrNoRows {
			c.Error(err)
	}
	if allowedtoreport {
		text := c.PostForm("text")
		if text == "" {
			addMessage(c, errorMessage{T(c, "You need to give us some information!")})
		} else {
			reason := c.PostForm("reasons")
			if reason == "" {
				addMessage(c, errorMessage{T(c, "You need to tell us what the person has done!")})
			} else {
				_, err = db.Exec(`INSERT INTO reports(from_uid, to_uid, reason, chatlog, time) VALUES (?, 	?, 		?, 		?, 		?);`, ctx.User.ID, user, reason, text, time.Now().Unix())
				if err != nil {
					c.Error(err)
				}
				_, err = db.Exec(`INSERT INTO rap_logs(userid, text, datetime, through) VALUES(?, 'just reported someone, check the reports!', ?, 'Simon\'s epic reporting system!')`, ctx.User.ID, time.Now().Unix())
				if err != nil {
					c.Error(err)
				}
			}
		}
	} else {
		addMessage(c, errorMessage{T(c, "Yeah, you can't do that man...")})
	}
}