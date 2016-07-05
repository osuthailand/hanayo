package main

import (
	"git.zxq.co/ripple/rippleapi/common"
	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
)

func sessionInitializer() func(c *gin.Context) {
	return func(c *gin.Context) {
		sess := sessions.Default(c)

		var ctx context
		tok := sess.Get("token")
		if tok, ok := tok.(string); ok {
			ctx.Token = tok
		}
		userid := sess.Get("userid")
		if userid, ok := userid.(int); ok {
			ctx.User.ID = userid
			db.QueryRow("SELECT username, privileges FROM users WHERE id = ?", userid).
				Scan(&ctx.User.Username, &ctx.User.Privileges)
		}

		var addBannedMessage bool
		if ctx.User.ID != 0 && (ctx.User.Privileges&common.UserPrivilegeNormal == 0) {
			ctx = context{}
			sess.Clear()
			sess.Save()
			addBannedMessage = true
		}

		// TODO: Add stay logged in
		// TODO: log out if banned

		c.Set("context", ctx)
		c.Set("session", sess)

		if addBannedMessage {
			addMessage(c, warningMessage{"You have been automatically logged out of your account because your account has either been banned or disabled. Should you believe this is a mistake, you can contact our support team at support@ripple.moe."})
		}

		c.Next()
	}
}

func addMessage(c *gin.Context, m message) {
	sess := c.MustGet("session").(sessions.Session)
	var messages []message
	messagesRaw := sess.Get("messages")
	if messagesRaw != nil {
		messages = messagesRaw.([]message)
	}
	messages = append(messages, m)
	sess.Set("messages", messages)
	sess.Save()
}

func getMessages(c *gin.Context) []message {
	sess := c.MustGet("session").(sessions.Session)
	messagesRaw := sess.Get("messages")
	if messagesRaw == nil {
		return nil
	}
	sess.Delete("messages")
	sess.Save()
	return messagesRaw.([]message)
}
