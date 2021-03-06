import { Injectable } from '@angular/core';
import { CloudSettings } from '@ionic/cloud-angular';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
	public drupalApiUrl = 'http://demo.titaniumtemplates.com/drupal/rest/views/rest_api';
	public youtube = {
		apiUrl: 'https://www.googleapis.com/youtube/v3/',
		key: 'AIzaSyDael5MmCQa1GKQNKQYypmBeB08GATgSEo',
		itemsPerPage: 20,
		username: 'google'
	};
	public vimeo = {
		userId: 'user13092665',
		accessToken: 'd995ffff0228beba7c9716c3ee0d4add',
		apiUrl: 'https://api.vimeo.com/users/',
		itemsPerPage: 20
	};
	public newsUrl = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/news.json';
	public productsUrl = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/products.json';
	public facebook = {
		apiUrl: 'https://graph.facebook.com/v2.3/',
		appId: '927897987270774',
		scope: ['email']
	};
	public google = {
		apiUrl: 'https://www.googleapis.com/oauth2/v3/',
		appId: '400671186930-m07eu77bm43tgr30p90k6b9e1qgsva4p.apps.googleusercontent.com',
		scope: ['email']
	};
	public ionicSecurityProfile = 'test';
	public ionicCloudApiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NGFjN2ZjMS1iNzAyLTRmOWMtOTFmOS0zZGE0YjA3MGJkNzcifQ.XiQkjfLm9U3Irnab6uQqgSXZ9Ilrt1LQfUTETJfLvbA';
	static sender_id = '211377410430';
	static app_id = 'f7f7ef47';
}

export const cloudSettings: CloudSettings = {
	'core': {
		'app_id': Config.app_id,
	},
	'push': {
		'sender_id': Config.sender_id
	}
};